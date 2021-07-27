const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123123',
    database: 'uberEats',
    port: '5432'
})


module.exports = pool;