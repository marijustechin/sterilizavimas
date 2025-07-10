import mysql from 'mysql2/promise';
import config from './config';

const dbAutoclave = mysql.createPool({
  host: config.db.db_host,
  user: config.db.db_user,
  password: config.db.db_pass,
  database: config.db.db_name,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default dbAutoclave;
