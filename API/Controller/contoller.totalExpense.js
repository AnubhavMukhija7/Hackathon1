import { totalExpenseDetails, totalExpenseForYearDetails } from '../Service/totalExpense_service.js';

const totalExpenseController = async () => {
    return await totalExpenseDetails();
};

const totalExpenseForYearController = (year) => {
    return totalExpenseForYearDetails(year);
};

export { totalExpenseController, totalExpenseForYearController };
