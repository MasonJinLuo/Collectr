var db = require("../models");
var fs = require("fs");
var multer = require('multer');
var upload = multer({ dest: 'public/images/users' });
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;

module.exports = function(app) {

    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser)
        });
    });

    app.get("/api/users/:email", function(req, res) {
        db.User.findOne({
            where: {
                email: req.params.email
            }
        }).then(function(dbUser) {
            res.json(dbUser)
        });
    });

    app.post("/api/users/:email/:password/:image/:desc/:interest", function(req, res) {
        var url = req.params.image;

        var newUrl = url.split('**').join('/');

        db.User.findOne({
            where: {
                email: req.params.email
            }
        }).then(function(dbUser) {
            if (dbUser) {
                res.status(401);
                res.json({ message: "An account with this email address already exists. Please login." });
            } else {
                db.User.create({
                    email: req.params.email,
                    password: req.params.password,
                    image_path: newUrl,
                    description: req.params.desc,
                    interests: req.params.interest
                }).then(function(dbUser) {
                    req.session.authenticated = true;
                    req.session.user = dbUser;
                    res.json(dbUser);
                });
            }
        });
    });

    app.delete("/api/users/:id", function(req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/login", function(req, res) {
        db.User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        }).then(function(dbUser) {
            if (dbUser) {
                req.session.authenticated = true;
                req.session.user = dbUser;
                res.json(dbUser);
            } else {
                res.sendStatus(401);
            }
        }).catch(function(err) {
            res.sendStatus(401);
        });
    });

    app.get("/api/secure/logout", function(req, res) {
        delete req.session.authenticated;
        delete req.session.user;
        res.sendStatus(200);
    });

    app.get("/api/blah", function(req, res) {
        res.json(req.session.user);
    });

    app.get('/sign-s3', (req, res) => {
        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            };
            res.write(JSON.stringify(returnData));
            res.end();
        });
    });
};
