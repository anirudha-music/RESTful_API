// Import express
import express from "express"
// Imports routes
import apiRoutes from "api-routes.js"

// import * as express from "express"
// import * apiRoutes from './build/'

// Initialise the app
const app = express()

// set up server port
const port = process.env.port || 3000

// Send message for default URL
app.get('/', (request, response) => response.send('Hello World with Express.'))

// Launch app to listen to specified port
app.listen(port, function(){
    console.log(`Listening on port ${port}`)
})



// Use API routes in the app.
app.use('/api', apiRoutes)