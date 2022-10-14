import dbconfig from './dbconfig.mjs'
import mysql from 'mysql2'
const DB = mysql.createConnection(dbconfig);
export default DB;
