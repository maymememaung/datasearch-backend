const Pool = require('pg').Pool
const config = require('./config')

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.db,
    password: config.password,
    port: 5432
})


const getItems = (request, response) => {

    const query = "SELECT items.id, items.name AS item_name, brands.name AS brand_name, categories.name AS category_name, items.quantity FROM items \
                    INNER JOIN categories ON items.category_id=categories.id \
                    INNER JOIN brands ON items.brand_id=brands.id;"

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        const res = {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
              "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
            },
            body: results.rows
        }
        response.send(res)
    })
}

module.exports = {
    getItems
}
