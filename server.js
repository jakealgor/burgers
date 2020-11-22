var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();
var connection = mysql.createConnection.process.env.JAWSDB_URL

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burgercontroller.js");

app.use(routes);

app.listen(PORT, function() {
console.log("Listening on port:%s", PORT);
});
