/*
    @author : Stacy
    @date : 
    @desc : 
*/

var db = require('../models');
var fs = require("fs");
var multer = require('multer');
var upload = multer({ dest: 'public/images/postImages' });
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;

module.exports = function(app) {

    //post new content
    ////WORK IN PROGRESS
    //WILL NEED TO ASSOCIATE OWNER/USER/CATEGORY (BOARD) ID WHEN COLLECTING POST CONTENT
    app.post('/api/secure/posts/:desc/:category/:image', function(req, res) {
        var imageUrl = (req.params.image).split("**").join("/");
        // var post = Object.assign({}, req.body, {
        //     img_path: req.file.path.replace('public/', '/'),
        //     user_id: req.session.user.id,
        //     owner_id: req.session.user.id
        // });

        db.Post.create({
            img_path: imageUrl,
            description: req.params.desc,
            user_id: req.session.user.id,
            owner_id: req.session.user.id,
            category_id: req.params.category
        }).then(function(response) {
            res.json(response);
        });
    });

    // update post likes
    //This works. Need to reload page to see changes
    app.put('/posts/upVote/:id/:newValue', function(req, res) {

        var postId = req.params.id;
        var newValue = req.params.newValue;

        db.Post.update({

            upVote: newValue

        }, {

            where: {
                id: postId
            }

        }).then(function(response) {
            res.json(response);
        });

    });

    // update post dislikes
    //This works. Need to reload page to see changes
    app.put('/posts/downVote/:id/:newValue', function(req, res) {

        var postId = req.params.id;
        var newValue = req.params.newValue;

        db.Post.update({

            downVote: newValue

        }, {

            where: {
                id: postId
            }

        }).then(function(response) {
            res.json(response);
        });

    });

    // delete existing post
    //How to delete post when connected to tags/post2tags?
    app.delete('/api/posts/:id', function(req, res) {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(response) {
            res.json(response);
        });
    });
}
