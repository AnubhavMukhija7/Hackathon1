import { totalExpense, totalExpenseForYear } from '../5Repository/repo.totalExp.js';

const totalExpenseDetails = async () => {
    return await totalExpense();
};

const totalExpenseForYearDetails = (year) => {
    return totalExpenseForYear(year);
};

export { totalExpenseDetails, totalExpenseForYearDetails };
