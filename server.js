const express = require('express')
const app = express()
const port = 1212

app.get('/', (request, response) => {
    response.status(200)
    response.send('welcome to homepage');
})

//introducing route to server
const userRouter = require('./routes/users')
//introducing route to server
const productsRouter = require('./routes/products')

//using user routes
app.use(userRouter)
app.use(productsRouter)

app.listen(port, () => console.log(`server started successfully click: http://localhost:${port}`))