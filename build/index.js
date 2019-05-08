"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import express
var express = __importStar(require("express"));
// import * apiRoutes from './build/'
// Initialise the app
var app = express.application;
// set up server port
var port = process.env.port || 8080;
// Send message for default URL
app.get('/', function (req, res) {
    res.send('Hello world with express');
});
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Listening on port " + port);
});
