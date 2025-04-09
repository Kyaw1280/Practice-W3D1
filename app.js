const express = require('express')
const app = express()
const fruits = require('./routes/fruits')


app.get('/', (req, res) => {
    res.send("hello world")
})

app.use('/fruits',fruits)

module.exports = app

