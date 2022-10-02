const serverless = require('serverless-http');
const express = require('express')
const app = express()
const db = require('./queries')

const headers = [
    "Item Id", "Item Name", "Brand", "Category", "Quantity"
]

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/headers', function (req, res) {
    res.set("Access-Control-Allow-Origin", "*")
    res.send(headers)
})

app.get('/items', db.getItems)

app.listen(5000, () => {
    console.log("listening")
})

module.exports.handler = serverless(app);
