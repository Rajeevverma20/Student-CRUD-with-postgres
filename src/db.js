const {Pool} = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "student",
    password: "___",
    port: __
})

module.exports = pool;
