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

    //get all posts by all USERS
    //THIS WORKS
    app.get('/api/users', function(req, res) {
        db.User.findAll({
            include: [db.Post],
            order: 'id ASC'
        }).then(function(response) {
            res.json(response);
        });
    });

    //get all posts by single USER
    //THIS WORKS
    app.get('/api/users/:id', function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function(response) {
            res.json(response);
        });
    });

    //post new 
    // app.post('/api/posts', function(req, res) {
    //     db.Post.create(req.body).then(function(response) {
    //         res.json(response);
    //     });
    // });

    // //update existing post
    // app.put('/api/posts/:id', function(req, res) {
    //     db.Post.update(req.body, {
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(response) {
    //         res.json(response);
    //     })
    // });

    //get all categories, including post information
    //DOES NOT WORK WHEN I INCLUDE DB.POST. **Unhandled rejection Error: Post is not associated to Category!**
    app.get('/api/categories', function(req, res) {
        db.Category.findAll({
            include: [db.Post],
            order: 'id ASC'
        }).then(function(response) {
            res.json(response);
        });
    });


}
