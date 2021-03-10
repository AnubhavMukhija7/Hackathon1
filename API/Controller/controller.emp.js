//employee
import {
    addEmployeeDetails,
    deleteEmployeeDetails,
    findAllEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
    updateEmployeeDetails,
    findYourEmployeeIdDetails,
    findAllBillableEmployeeDetails,
    findAllNonBillableEmployeeDetails,
    findCompensationOfOneEmployeeInGivenYearDetails,
    findCtcOfOneEmployeeInTheGivenYearDetails,
    findOverheadOfOneEmployeeInTheGivenYearDetails,
    findAllDetailsOfOneEmpoyeeDetails,
} from '../Service/emp_service.js';

//employee
const addEmployeeController = async (req) => {
    return await addEmployeeDetails(req);
};

const deleteEmployeeController = async (req) => {
    return await deleteEmployeeDetails(req);
};

const findAllEmployeeController = async (req) => {
    return await findAllEmployeeDetails(req);
};

const findOneEmployeeController = async (req) => {
    return await findOneEmployeeDetails(req);
};

const updateEmployeeController = async (req) => {
    return await updateEmployeeDetails(req);
};

const findAllBillableEmployeeController = async () => {
    return await findAllBillableEmployeeDetails();
};

const findAllNonBillableEmployeeController = async () => {
    return await findAllNonBillableEmployeeDetails();
};

const findCompensationOfOneEmployeeInGivenYearController = async (req) => {
    return await findCompensationOfOneEmployeeInGivenYearDetails(req);
};

const findCtcOfOneEmployeeInTheGivenYearController = async (req) => {
    return await findCtcOfOneEmployeeInTheGivenYearDetails(req);
};

const findOverheadOfOneEmployeeInTheGivenYearController = async (req) => {
    return String(await findOverheadOfOneEmployeeInTheGivenYearDetails(req));
};

const findAllEmployeeInTheGivenYearController = async (req) => {
    return await findAllEmployeeInTheGivenYearDetails(req);
};

const findYourEmployeeIdController = async (req) => {
    const data = await findYourEmployeeIdDetails(req);
    return String(data);
};

const findAllDetailsOfOneEmpoyeeController = async (req) => {
    const data = await findAllDetailsOfOneEmpoyeeDetails(req);
    return data;
};
//export
//export { addVendor, updateVendor, deleteVendor, findAllVendor, findOneVendor};
export {
    addEmployeeController,
    deleteEmployeeController,
    findAllEmployeeController,
    findOneEmployeeController,
    findAllEmployeeInTheGivenYearController,
    updateEmployeeController,
    findYourEmployeeIdController,
    findAllBillableEmployeeController,
    findAllNonBillableEmployeeController,
    findCompensationOfOneEmployeeInGivenYearController,
    findCtcOfOneEmployeeInTheGivenYearController,
    findOverheadOfOneEmployeeInTheGivenYearController,
    findAllDetailsOfOneEmpoyeeController,
};
