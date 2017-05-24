//Stacy
var db = require('../models');

module.exports = function(app) {
    
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
    app.get('/api/posts/:id', function(req, res) {
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User, db.Category]
        }).then(function(response) {
            res.json(response);
        });
    });
    //post new content
    //THIS WORKS. WILL NEED TO ASSOCIATE OWNER/USER/CATEGORY (BOARD) ID WHEN COLLECTING POST CONTENT
    app.post('/api/posts', function(req, res) {
        db.Post.create(req.body).then(function(response) {
            res.json(response);
        });
    });

    // update existing post
    //THIS WORKS
    app.put('/api/posts/:id', function(req, res) {
        db.Post.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(response) {
            res.json(response);
        })
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
