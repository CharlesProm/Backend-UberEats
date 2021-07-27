const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: '123123',
//     database: 'uberEats',
//     port: '5432'
// })
const pool = new Pool({
    host: 'ec2-44-194-112-166.compute-1.amazonaws.com',
    user: 'misrzqpedoigfn',
    password: '6c87ee8a771053f804ec46b6235baccd7e971887be1061ee876de8ef693e2610',
    database: 'd9emsdqgc7ooch',
    port: '5432'
})

module.exports = pool;
