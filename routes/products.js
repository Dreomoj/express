const express = require('express')
const router = express.Router()

//get all products
router.get('/products', (request, response) =>{
    response.status(200)
    response.send({
        name: 'iphone 15',
        price: '$1500',
        ratings: 5,
        description: 'Buy now pay later'
    })
})



module.exports = router