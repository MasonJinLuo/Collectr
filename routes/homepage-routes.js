var db = require('../models');

module.exports = function(app) {

    app.get('/api/posts', function(req, res) {
        db.post.findAll({
            include: [db.user, db.Category]
        }).then(function(response) {
            res.json(response);
        });
    });

    app.post('/api/posts', function(req, res) {
        db.post.create(req.body).then(function(response) {
            res.json(response);
        });
    });

    // app.get('/api/categories', function(req, res) {

    // });
}
