//Stacy
var db = require('../models');
var multer  = require('multer')
var upload = multer({ dest: 'public/images/postImages' })

module.exports = function(app) {

    //post new content
    //THIS WORKS. WILL NEED TO ASSOCIATE OWNER/USER/CATEGORY (BOARD) ID WHEN COLLECTING POST CONTENT
    app.post('/api/secure/posts', upload.single('photo'), function(req, res) {
        var post = Object.assign({}, req.body, {
            img_path: req.file.path.replace('public/', ''),
            user_id: req.session.user.id
        });
        db.Post.create(post).then(function(response) {
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
