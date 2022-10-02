const serverless = require('serverless-http');
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/user', function (req, res) {
    res.send('This is user page.')
})

app.get('/error', function (req, res) {
    res.send('This is error page.')
})

module.exports.handler = serverless(app);
