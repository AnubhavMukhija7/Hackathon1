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
    res.send(response);
};

const updateEmployeeDetails = async (req, res) => {
    const response = await updateEmployee(req.body);
    res.send(response);
};

const deleteEmployeeDetails = async (req, res) => {
    return await deleteEmployee(req.body);
};

const findAllEmployeeDetails = async (req, res) => {
    return await findAllEmployee();
};

const findOneEmployeeDetails = async (req, res) => {
    return await findOneEmployee(req.params.id);
};

const findAllEmployeeInTheGivenYearDetails = async (req, res, next) => {
    return await findAllEmployeeInTheGivenYear(req.params.year);
};
export {
    addEmployeeDetails,
    updateEmployeeDetails,
    deleteEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
};
