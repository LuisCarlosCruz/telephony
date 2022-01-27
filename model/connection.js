const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'luis@LUIS123',
  database: 'telephony'
});

module.exports = connection;
