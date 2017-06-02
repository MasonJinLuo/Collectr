var db = require("../models");
var fs = require("fs");
var multer  = require('multer')
var upload = multer({ dest: 'public/images/users' })

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

	app.post("/api/users", upload.single('photo'), function(req, res) {
        var user = Object.assign({}, req.body, {
            image_path: req.file ? req.file.path.replace('public/', '/') : null
        });

        db.User.findOne({
			where: {
				email: user.email
			}
		}).then(function(dbUser) {
		    if (dbUser) {
                res.status(401);
                res.json({ message: "An account with this email address already exists. Please login." });
		    } else {
                db.User.create(user).then(function(dbUser) {
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
};