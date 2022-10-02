const serverless = require('serverless-http');
const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/items', db.getItems)

module.exports.handler = serverless(app);
