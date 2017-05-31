//Stacy

var db = require('../models');

module.exports = function(app) {

    //Basic homepage rendering
    //Feeds information into handlebars
    //Renders content in horizontal scrolling content bars
    //THIS WORKS
    app.get('/', function(req, res) {
        db.Category.findAll({
            order: 'id ASC',
            include: [{
                model: db.Post
            }]
        }).then(function(response) {

            //Only put categories with content on the homepage
            var categoryHasPosts = [];
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].name + ': ' + response[i].Posts.length);

                if (response[i].Posts.length > 0) {
                    categoryHasPosts.push(response[i]);
                }
            }

            //Future Goal: Sort by popularity and render most popular first
            res.render('index', { category: categoryHasPosts });
            // res.json(response);

        });
    });

    //Specific userpage rendering
    //Feeds user specific information into handlebars
    //Renders content in horizontal scrolling content bars
    //THIS WORKS
    app.get('/user/:userID', function(req, res) {
        db.Category.findAll({
            include: [{
                model: db.Post,
                where: { user_id: req.params.userID }
            }]
        }).then(function(response) {
            //Future Goal: Sort by popularity and render most popular first
            res.render('index', { category: response });
        });
    });

    app.get('/category/:categoryID', function(req, res) {
        db.Category.findAll({
            include: [{
                model: db.Post,
            }],
            where: { id: req.params.categoryID }
        }).then(function(response) {
            // res.json(response);
            res.render('category', { category: response });
        });
    });

    app.get('/groups', function(req, res) {
        db.Category.findAll({
            include: [{
                model: db.Post
            }]
        }).then(function(response) {
            // res.json(response);
            res.render('groups', { category: response });
        });
    });

    //get all posts, including user and category information
    //THIS WORKS
    app.get('/api/posts', function(req, res) {
        db.Post.findAll({
            include: [db.User, db.Category],
            order: 'id ASC'
        }).then(function(response) {
            res.json(response);
        });
    });

    //get one post by ID, including user and category information
    //THIS WORKS
    app.get('/api/posts/:postID', function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.postID
            },
            include: [db.User, db.Category]
        }).then(function(response) {
            res.json(response);
        });
    });

    //get all categories
    //show all posts in all categories
    //THIS WORKS
    app.get('/api/category', function(req, res) {
        db.Category.findAll({
            include: [db.Post]
        }).then(function(response) {
            res.json(response);
        })
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
    app.get('/api/users-posts/:userID', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.userID
            },
            include: [db.Post]
        }).then(function(response) {
            res.json(response);
        });
    });

    //get a list of all tags
    //THIS WORKS
    app.get('/api/tags', function(req, res) {
        db.Tags.findAll({

        }).then(function(response) {
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
