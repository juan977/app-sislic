const Pool = require('pg').Pool

const pool = new Pool({
    host: 'ec2-54-147-33-38.compute-1.amazonaws.com',
    user: 'nytyupjroaranf',
    password: 'fa769a1f6476a77bd5468c8ed092f10c7bf3c8f4a867da1983c44db2dba3aab8',
    database: 'd3i1tuucb79ebo',
    port: '5432',
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;