import { config } from '../7Configuration/db.config.js';
import sql from 'mssql';

export const makeConnection = async () => {
    let req = await sql.connect(config);
    console.log('Connected to the database.');
    return req;
};
