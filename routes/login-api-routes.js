/*
    @author : Linette
    @date : 
    @desc : 
*/

var db = require("../models");
var fs = require("fs");
var multer  = require('multer');
var upload = multer({ dest: 'public/images/users' });

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
            image_path: req.file.path.replace('public/', '')
        });

		db.User.create(user).then(function(dbUser) {
			res.json(dbUser);
		});
	});

	app.delete("api/users/:id", function(req, res) {
		db.User.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbUser) {
			res.json(dbUser);
		});
	});
};