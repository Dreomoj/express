const express = require('express')

const router = express.Router()

//get all users
router.get('/users', (request, response) =>{
    response.status(200)
    response.send('welcome to users page')
})


//get a single user
router.get('/users/:id', (request, response) => {
    response.status(200)
    response.send('welcome to a single user')
})


//add a new user
router.post('/users', (request, response) => {
    response.status(200)
    response.send('new user added')
})

//update a new user
router.put('/users/:id', (request, response) => {
    response.status(200)
    response.send('user updated')
})

//delete a new user
router.delete('/users/:id', (request, response) => {
    response.status(200)
    response.send('user deleted')
})


module.exports = router