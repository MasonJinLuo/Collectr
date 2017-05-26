//Stacy

var db = require('../models');

module.exports = function(app) {

    //get all posts in a certain category, including user and category information
    //highest upVote rated is listed first
    //THIS WORKS
    app.get('/api/category/:categoryID', function(req, res) {
        db.Post.findAll({
            include: [db.User, db.Category],
            order: 'upVote DESC',
            where: { category_id: req.params.categoryID }
        }).then(function(response) {
            res.json(response);
        });
    });

    //Basic homepage rendering
    app.get('/', function(req, res) {
        db.Post.findAll({}).then(function(response) {
            res.render('index');
        });
    });

    //get all posts in all categories, including user and category information
    //highest upVote rated is listed first
    //THIS WORKS
    app.get('/api/category', function(req, res) {
        db.Post.findAll({
            include: [db.User, db.Category],
            order: 'upVote DESC'
        }).then(function(response) {
            res.json(response);
        });
    });
    //get all posts by all USERS
    //THIS WORKS
    app.get('/api/users-posts', function(req, res) {
        db.User.findAll({
            include: [db.Post],
            order: 'id ASC'
        }).then(function(response) {
            res.json(response);
        });
    });

    //get all posts by single USER
    //THIS WORKS
    app.get('/api/users-posts/:id', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(response) {
            res.json(response);
        });
    });

    //get a list of all tags
    //THIS WORKS
    app.get('/api/tags', function(req, res) {
        db.Tags.findAll({}).then(function(response) {
            res.json(response);
        })
    });

    //get a list of all tags and their associated post uses
    //sorted by tag; all uses of a tag are grouped together
    //THIS WORKS
    app.get('/api/tags/post', function(req, res) {
        db.Post2Tags.findAll({
            include: [db.Tags, db.Post],
            order: 'tag_id ASC'
        }).then(function(response) {
            res.json(response);
        })
    });

    //get all tags that have been associated with a single post, including post and tag information
    //THIS WORKS
    app.get('/api/tags/post/:postID', function(req, res) {
        db.Post2Tags.findAll({
            include: [db.Tags, db.Post],
            where: { post_id: req.params.postID },
            order: 'post_id ASC'
        }).then(function(response) {
            res.json(response);
        })
    });

    //collecting a post from another user
    app.post('/api/collect/:id', function(req, res) {

    });

}
