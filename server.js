// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var helpers = require('handlebars-helpers')();
// var array = helpers.array();

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
