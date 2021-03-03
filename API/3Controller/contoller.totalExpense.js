import { totalExpenseDetails, totalExpenseForYearDetails } from '../4Service/totalExpense_service.js';

const totalExpenseController = () => {
    return totalExpenseDetails();
};

const totalExpenseForYearController = (year) => {
    return totalExpenseForYearDetails(year);
};

export { totalExpenseController, totalExpenseForYearController };
