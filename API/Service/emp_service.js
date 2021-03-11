import {
    findOneEmployee,
    addEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
    updateEmployee,
    findYourEmployeeId,
    findAllBillableEmployee,
    findAllNonBillableEmployee,
    findCompensationOfOneEmployeeInGivenYear,
    findCtcOfOneEmployeeInTheGivenYear,
    findOverheadOfOneEmployeeInTheGivenYear,
    findAllDetailsOfOneEmpoyee,
    getUniques,
} from '../Repository/repo.emp.js';

const validateData = async (data) => {
    const { eMailDetails, panDetails, accDetails, officeDetails } = await getUniques();
    const phoneno = /^\d{10}$/;
    if (!data.Office.match(phoneno)) {
        return "'PrimaryMobile' should be valid and should contain 10 digits.";
    }
    if (data.FirstName.length < 2) {
        return "Length of 'FirstName' should be greater than 2";
    }
    if (eMailDetails.indexOf({ Email: data.Email })) {
        return `Employee with Email: ${data.Email} already exists. Email Address should be unique.`;
    }
    if (data.LeavingDate.length > 1 && data.LeavingDate < data.JoiningDate) {
        return 'Leaving date should occur after Joining date';
    }
    if (panDetails.indexOf({ PAN: data.PAN })) {
        return `Employee with PAN: ${data.PAN} already exists. PAN Number should be unique.`;
    }
    if (accDetails.indexOf({ AccountNo: data.AccountNo })) {
        return `Employee with Account Number: ${data.AccountNo} already exists. Account Number should be unique.`;
    }
    if (officeDetails.indexOf({ Office: data.Office })) {
        return `Office Number: ${data.Office} already exists. Office Number should be unique.`;
    }
    return 'Correct!';
};

const addEmployeeDetails = async (req) => {
    let result = validateData(req.body);
    if (result === 'Correct!') {
        result = await addEmployee(req.body);
    }
    return result;
};

const deleteEmployeeDetails = async (req) => {
    const response = await deleteEmployee(req.params.id);
    return response;
};

const findAllEmployeeDetails = async () => {
    const response = await findAllEmployee();
    return response;
};

const findOneEmployeeDetails = async (req) => {
    const resopnse = await findOneEmployee(req.params.id);
    return resopnse;
};

const findAllEmployeeInTheGivenYearDetails = async (req) => {
    const resopnse = await findAllEmployeeInTheGivenYear(req.params.year);
    return resopnse;
};

const updateEmployeeDetails = async (req) => {
    const resopnse = await updateEmployee(req.body, req.params.id);
    return resopnse;
};
const findYourEmployeeIdDetails = async (req) => {
    const response = await findYourEmployeeId(req.params.emailId);
    return response;
};
const findAllBillableEmployeeDetails = async () => {
    const response = await findAllBillableEmployee();
    return response;
};

const findAllNonBillableEmployeeDetails = async () => {
    const response = await findAllNonBillableEmployee();
    return response;
};

const findCompensationOfOneEmployeeInGivenYearDetails = async (req) => {
    const response = await findCompensationOfOneEmployeeInGivenYear(req.params.year, req.params.id);
    return response;
};

const findCtcOfOneEmployeeInTheGivenYearDetails = async (req) => {
    const response = await findCtcOfOneEmployeeInTheGivenYear(req.params.year, req.params.id);
    return response;
};

const findOverheadOfOneEmployeeInTheGivenYearDetails = async (req) => {
    const response = await findOverheadOfOneEmployeeInTheGivenYear(req.params.year);
    return response;
};

const findAllDetailsOfOneEmpoyeeDetails = async (req) => {
    const response = await findAllDetailsOfOneEmpoyee(req.params.id);
    return response;
};
export {
    addEmployeeDetails,
    deleteEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
    updateEmployeeDetails,
    findYourEmployeeIdDetails,
    findAllBillableEmployeeDetails,
    findAllNonBillableEmployeeDetails,
    findCompensationOfOneEmployeeInGivenYearDetails,
    findCtcOfOneEmployeeInTheGivenYearDetails,
    findOverheadOfOneEmployeeInTheGivenYearDetails,
    findAllDetailsOfOneEmpoyeeDetails,
};
