/*
    @author : Stacy
    @date : 
    @desc : 
*/

var db = require('../models');
var fs = require("fs");
var multer = require('multer');
var upload = multer({ dest: 'public/images/postImages' });

module.exports = function(app) {

    //post new content
    ////WORK IN PROGRESS
    //WILL NEED TO ASSOCIATE OWNER/USER/CATEGORY (BOARD) ID WHEN COLLECTING POST CONTENT
    app.post('/api/posts', upload.single('photo'), function(req, res) {

        var post = Object.assign({}, req.body, {
            image_path: req.file.path.replace('public/', '')
        });

        db.Post.create(post).then(function(response) {
            res.json(response);
        });
    });

    // update existing post
    //WORK IN PROGRESS
    app.put('/posts/:variable/:id/:newValue', function(req, res) {

        var variableToUpdate = req.params.variable;
        var postId = req.params.id;
        var newValue = req.params.newValue;

        //These alerts/logs do not work
        console.log(variableToUpdate);
        console.log(postId);
        console.log(newValue);

        db.Post.update({

            variableToUpdate: newValue

        }, {

            where: {
                id: postId
            }

        }).then(function(response) {
            //These alerts/logs do not work
            // console.log(variableToUpdate);
            // console.log(postId);
            // console.log(newValue);
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
