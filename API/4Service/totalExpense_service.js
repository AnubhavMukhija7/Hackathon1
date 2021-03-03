import { totalExpense, totalExpenseForYear } from '../5Repository/repo.totalExp.js';

const totalExpenseDetails = () => {
    return totalExpense();
};

const totalExpenseForYearDetails = (year) => {
    return totalExpenseForYear(year);
};

export { totalExpenseDetails, totalExpenseForYearDetails };
