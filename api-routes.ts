// Initialise express router
import express from "express"
const router = express.Router()

// set default API response
router.get('/', function(request, response) {
    response.status(200).send({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    })
})

export default router