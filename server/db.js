// config connection to db
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Pasha3502904944',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;