const usersRouter = require('./Routes/users')

const path = require('path')

const express = require('express')


const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.use(usersRouter)


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000)