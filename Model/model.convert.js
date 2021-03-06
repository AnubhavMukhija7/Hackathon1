import Employee from './model.employee.js';
import Facility from './model.facility.js';
import Expense from './model.expense.js';
const convertToModel = (data) => {
    const result = [];
    for (const item of data) {
        result.push({
            ...new Employee(
                item.EmpId,
                item.Title,
                item.FirstName,
                item.LastName,
                item.Office,
                item.PrimaryMobile,
                item.Email,
                item.Status,
                item.District,
                item.City,
                item.TotalCompensation,
                item.CTC
            ),
            ...new Facility(item.FacilityId, item.FacilityName, item.FacilityDescription, item.IsActive),
            ...new Expense(item.Amount),
        });
    }
    return result;
};

export { convertToModel };
