import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const totalExpense = async () => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const totalExpenseForYear = async () => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

export { totalExpense, totalExpenseForYear };
