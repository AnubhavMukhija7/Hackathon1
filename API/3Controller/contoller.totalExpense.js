import { totalExpenseDetails, totalExpenseForYearDetails } from '../4Service/totalExpense_service.js';

const totalExpenseController = async () => {
    return await totalExpenseDetails();
};

const totalExpenseForYearController = (year) => {
    return totalExpenseForYearDetails(year);
};

export { totalExpenseController, totalExpenseForYearController };
