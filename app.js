const usersRouter = require('./Routes/users')
const http = require('http')

const path = require('path')

const express = require('express')


const app = express()

app.get(usersRouter)


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000)