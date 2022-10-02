const serverless = require('serverless-http');
const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/user', function (req, res) {
    res.send('This is user page.')
})

app.get('/error', function (req, res) {
    res.send('This is error page.')
})

app.get('/items', db.getItems)

module.exports.handler = serverless(app);
