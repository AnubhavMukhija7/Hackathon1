import {
    findOneEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
} from '../5Repository/repo.emp.js';

const addEmployeeDetails = async (req, res) => {
    const response = await addEmployee(req.body);
    return response;
};

const updateEmployeeDetails = async (req, res) => {
    const response = await updateEmployee(req.body);
    return response;
};

const deleteEmployeeDetails = async (req, res) => {
    const response =  await deleteEmployee(req.body);
    return response;
};

const findAllEmployeeDetails = async (req, res) => {
    const response =  await findAllEmployee();
    return response;
};

const findOneEmployeeDetails = async (req, res) => {
    const resopnse = await findOneEmployee(req.params.id);
    return resopnse;
};

const findAllEmployeeInTheGivenYearDetails = async (req, res, next) => {
    const resopnse =  await findAllEmployeeInTheGivenYear(req.params.year);
    return resopnse;
};
export {
    addEmployeeDetails,
    updateEmployeeDetails,
    deleteEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
};
