import { user, host, db, password } from "./config"

const Pool = require('pg').Pool

const pool = new Pool({
    user: user,
    host: host,
    database: db,
    password: password,
    port: 5432
})


const getItems = (request, response) => {

    const query = "SELECT items.id, items.name, brands.name, categories.name, items.quantity FROM items \
                    INNER JOIN categories ON items.category_id=categories.id \
                    INNER JOIN brands ON items.brand_id=brands.id;"

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getItems
}
