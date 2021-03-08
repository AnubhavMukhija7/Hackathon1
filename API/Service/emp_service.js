<<<<<<< HEAD:API/4Service/emp_service.js
=======
<<<<<<< HEAD:API/4Service/emp_service.js
import { addingController, findCtcOfOneEmployeeInTheGivenYearController, findOneEmployeeController } from '../3Controller/controller.emp.js';
=======
import { findCtcOfOneEmployeeInTheGivenYearController, findOneEmployeeController } from '../Controller/controller.emp.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/emp_service.js
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Service/emp_service.js
import {
    findOneEmployee,
    addEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
    updateEmployeeBankAccount,
    findYourEmployeeId,
    findAllBillableEmployee,
    findAllNonBillableEmployee,
    findCompensationOfOneEmployeeInGivenYear,
    findCtcOfOneEmployeeInTheGivenYear,
<<<<<<< HEAD:API/4Service/emp_service.js
    findOverheadOfOneEmployeeInTheGivenYear,
=======
<<<<<<< HEAD:API/4Service/emp_service.js
    findOverheadOfOneEmployeeInTheGivenYear,
    adding
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Service/emp_service.js
} from '../5Repository/repo.emp.js';
=======
    findOverheadOfOneEmployeeInTheGivenYear
} from '../Repository/repo.emp.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/emp_service.js

const addEmployeeDetails = async (req, res) => {
    const response = await addEmployee(req.body);
    return response;
};

const deleteEmployeeDetails = async (req, res) => {
    const response = await deleteEmployee(req.params.id);
    return response;
};

const findAllEmployeeDetails = async (req, res) => {
    const response = await findAllEmployee();
    return response;
};

const findOneEmployeeDetails = async (req, res) => {
    const resopnse = await findOneEmployee(req.params.id);
    return resopnse;
};

const findAllEmployeeInTheGivenYearDetails = async (req, res, next) => {
    const resopnse = await findAllEmployeeInTheGivenYear(req.params.year);
    return resopnse;
};

const updateEmployeeBankAccountDetails = async (req, res) => {
    const resopnse = await updateEmployeeBankAccount(req.body, req.params.id);
    return resopnse;
};
const findYourEmployeeIdDetails = async (req, res) => {
    const response = await findYourEmployeeId(req.params.emailId);
    return response;
};
const findAllBillableEmployeeDetails = async (req, res) => {
    const response = await findAllBillableEmployee();
    return response;
};

const findAllNonBillableEmployeeDetails = async (req, res) => {
    const response = await findAllNonBillableEmployee();
    return response;
};

const findCompensationOfOneEmployeeInGivenYearDetails = async (req, res) => {
    const response = await findCompensationOfOneEmployeeInGivenYear(req.params.year, req.params.id);
    return response;
};

const findCtcOfOneEmployeeInTheGivenYearDetails = async (req, res) => {
    const response = await findCtcOfOneEmployeeInTheGivenYear(req.params.year, req.params.id);
    return response;
};

const findOverheadOfOneEmployeeInTheGivenYearDetails = async (req, res) => {
    const response = await findOverheadOfOneEmployeeInTheGivenYear(req.params.year);
<<<<<<< HEAD:API/4Service/emp_service.js
    return (response[0] / response[1]).toFixed(2);
};
=======
    return response;
}

const addingDetails = async(req,res)=>{
    const response = await adding(req.params.FirstName,req.params.LastName,req.params.email);
    return response;
}
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Service/emp_service.js
export {
    addEmployeeDetails,
    deleteEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
    updateEmployeeBankAccountDetails,
    findYourEmployeeIdDetails,
    findAllBillableEmployeeDetails,
    findAllNonBillableEmployeeDetails,
    findCompensationOfOneEmployeeInGivenYearDetails,
    findCtcOfOneEmployeeInTheGivenYearDetails,
    findOverheadOfOneEmployeeInTheGivenYearDetails,
<<<<<<< HEAD:API/4Service/emp_service.js
=======
    addingDetails
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Service/emp_service.js
};
