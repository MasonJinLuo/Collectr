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
                model: db.Post,
                include: [{
                    model: db.Post2Tags,
                    include: [db.Tags]
                }, {
                    model: db.Category
                }, {
                    model: db.User
                }]
            }]
        }).then(function(response) {

            //Only put categories with content on the homepage
            // var categoryHasPosts = [];
            // for (var i = 0; i < response.length; i++) {
            //     console.log(response[i].name + ': ' + response[i].Posts.length);

            //     if (response[i].Posts.length > 0) {
            //         categoryHasPosts.push(response[i]);
            //     }
            // }

            //Future Goal: Sort by popularity and render most popular first
            res.render('index', { category: response });
            // res.json(response);

        });
    });

    //Specific userpage rendering
    //Feeds user specific information into handlebars
    //Renders content in horizontal scrolling content bars
    //THIS WORKS
    app.get('/user/:userID', function(req, res) {
        db.Category.findAll({
            order: 'id ASC',
            include: [{
                model: db.Post,
                include: [{
                    model: db.Post2Tags,
                    include: [db.Tags]
                }, {
                    model: db.Category
                }, {
                    model: db.User,
                    where: { id: req.params.userID }
                }]
            }]
        }).then(function(response) {

            res.render('dashboard', { category: response });
            // res.json(response);
        });
    });

    app.get('/category/:categoryID', function(req, res) {
        db.Category.findAll({
            include: [{
                model: db.Post,
                include: [{
                    model: db.Post2Tags,
                    include: [db.Tags]
                }, {
                    model: db.Category
                }, {
                    model: db.User
                }]
            }],
            where: { id: req.params.categoryID }
        }).then(function(response) {
            // res.json(response);
            res.render('category', { category: response });
        });
    });

    app.get('/api/category/:categoryID', function(req, res) {
        db.Category.findOne({
            include: [{
                model: db.Post,
            }],
            where: { id: req.params.categoryID }
        }).then(function(response) {
            res.json(response);
            // res.render('category', { category: response });
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
            include: [{
                model: db.User
            }, {
                model: db.Category
            }, {
                model: db.Post2Tags,
                include: [db.Tags]
            }],
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
        });
    });

    app.get('/tags/:tagName', function(req, res) {
        db.Tags.findOne({
            where: { name: req.params.tagName }
        }).then(function(response) {
            res.json(response);
        });
    });

    app.post('/tags/:tagName', function(req, res) {
        db.Tags.create({
            name: req.params.tagName
        }).then(function(response) {
            res.json(response);
        });
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

    app.post('/post2tags/:postID/:tagID', function(req, res) {
        db.Post2Tags.create({
            post_id: req.params.postID,
            tag_id: req.params.tagID
        }).then(function(response) {
            res.json(response);
        });
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
        });
    });

    //collecting a post from another user
    app.post('/collect/secure/:description/:img_path/:owner_id/:category_id', function(req, res) {
        var image = '/images/postImages/' + req.params.img_path;
        db.Post.create({
            description: req.params.description,
            img_path: image,
            user_id: req.session.user.id,
            owner_id: req.params.owner_id,
            category_id: req.params.category_id
        }).then(function(response) {
            res.json(response);
        });
    });


    //search through for a specific word

      app.get('/search/:searchTerm', function(req, res){
        db.Tags.findAll({
            include: [{
                model: db.Post2Tags,
                include: [{
                    model: db.Post,
                    include: [{
                        model: db.Post2Tags,
                        include: [db.Tags]
                    }, {
                        model: db.Category
                    }, {
                        model: db.User
                }]
                }]
            }],
            where: { name: req.params.searchTerm }
        }).then(function(response){
            // console.log(response)
            res.render('searchDisplay', { tags: response});
            // res.json(response[0].Post2Tags[0].Post);
            // res.json(response);
        })

    });






}
