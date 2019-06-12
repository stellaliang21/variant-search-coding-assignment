const Pool = require('pg').Pool

const pool = new Pool({
  user: 'stellaliang',
  host: 'localhost',
  database: 'variants'
})

pool.connect((err, client, done) => {
  if (err) return console.log(err)
  console.log("success")
 });

 module.exports.pool = pool;