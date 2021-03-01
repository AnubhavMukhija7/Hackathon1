import { config } from '../7Configuration/db.config.js';
import sql from 'mssql';

export async function makeConnection() {
  const pool = await sql.connect(config);
  const req = await pool.request();
  return req;
}
