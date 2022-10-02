const Pool = require('pg').Pool

const pool = new Pool({
    user: 'maymaung',
    host: 'datasearch-database-1-instance-1-us-east-1c.c8mot3egztv2.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'B83IB99GFQCYT1M144an',
    port: 5432
})


const getItems = (request, response) => {
    pool.query('SELECT * FROM items', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getItems
}
