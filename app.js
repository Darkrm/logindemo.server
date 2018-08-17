var config = require("./lib/config");
var db = require("./lib/db");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("./logic/cors");

var app = express();

app.enable("trust proxy");
app.use(cors);
app.use(bodyParser.text());

app.use("/api", require("./routers"));

app.listen(config.appPort);
console.log(`Server Started Successfully on: ${Date()}`);