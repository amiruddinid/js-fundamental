const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5433,
    database: 'blog',
    user: 'postgres',
    password: '1234',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

module.exports = pool;