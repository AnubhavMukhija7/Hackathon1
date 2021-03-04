import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const totalExpense = async () => {
    const query = `Select * from ExpenseSummary`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const totalExpenseForYear = async (year) => {
    const query = `Select * from ExpenseSummary where Year = ${year}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

export { totalExpense, totalExpenseForYear };
