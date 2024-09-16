const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,          // Database host from environment variable
  user: process.env.DB_USER,          // Database username from environment variable
  password: process.env.DB_PASSWORD,  // Database password from environment variable
  database: process.env.DB_NAME,      // Database name from environment variable
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Create a promise-based connection pool
const promisePool = pool.promise();

module.exports = promisePool;   // Export promisePool
