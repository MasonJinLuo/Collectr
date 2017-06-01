// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var cookieSession = require('cookie-session');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var collectrdb = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Sets up Express session management
app.use(cookieSession({
    name: 'session',
    keys: ['collectors-secret'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

function checkAuth(req, res, next) {
	if (req.url.startsWith('/api/secure') && (!req.session || !req.session.authenticated)) {
		res.redirect('/');
		return;
	}

	next();
}

app.use(checkAuth);

//Sets up handlebars as view engine
app.engine("handlebars", exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, '/views/layouts/partials')
}));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/homepage-routes.js")(app);
require("./routes/user-post-routes.js")(app);
require("./routes/login-api-routes.js")(app);

collectrdb.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
