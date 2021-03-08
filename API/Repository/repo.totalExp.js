import { makeConnection } from '../Connection/connection.js';
import Expense from '../../Model/model.expense.js';
const request = await makeConnection();

const totalExpense = async () => {
    const query = `Select * from ExpenseSummary`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const totalExpenseForYear = async (year) => {
    const query = `Select * from ExpenseSummary where Year = ${year}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const convertToModel = (data) => {
    const result = [];
    for (const item of data) {
        result.push(
            new Expense(
                item.Amount,
                item.Year,
                item.Revenue,
                item.Balance,
                item.financialStatement,
                item.TotalOverhead,
                item.TotalBenefit,
                item.TotalCompensation
            )
        );
    }
    return result;
};

export { totalExpense, totalExpenseForYear };
