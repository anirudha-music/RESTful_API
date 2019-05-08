// Import express
var express = require('express');
// import * as express from "express"
// import * apiRoutes from './build/'
// Initialise the app
var app = express();
// set up server port
var port = process.env.port || 8080;
// Send message for default URL
app.get('/', function (req, res) { return res.send('Hello World with Express'); });
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Listening on port " + port);
});
