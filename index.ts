// Import express
const express = require('express')
// import * as express from "express"
// import * apiRoutes from './build/'

// Initialise the app
const app: express.Application = express()

// set up server port
const port = process.env.port || 8080

// Send message for default URL
app.get('/', function(req, res) {
    res.send('Hello world with express')
})

// Launch app to listen to specified port
app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})