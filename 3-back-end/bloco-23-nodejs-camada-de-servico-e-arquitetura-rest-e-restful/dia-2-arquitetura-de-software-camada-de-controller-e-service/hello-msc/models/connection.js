// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: 'thatsMySqlPW',
  database: process.env.MYSQL_DB_NAME,
  });

module.exports = connection;
