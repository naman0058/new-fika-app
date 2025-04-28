
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
 
  host : 'db-mysql-blr1-78922-do-user-4199968-0.c.db.ondigitalocean.com',
   user: 'doadmin',
  password:'AVNS_GQrps4okJNd-Q3VSn68',
    database: 'leffet',
    port:'25060',
    multipleStatements: true,
    charset: 'utf8mb4'  // << VERY IMPORTANT
  })


module.exports = pool;