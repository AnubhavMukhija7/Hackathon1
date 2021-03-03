import { findCtcOfOneEmployeeInTheGivenYearController, findOneEmployeeController } from '../3Controller/controller.emp.js';
import {
    findOneEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
    updateEmployeeBankAccount,
    findYourEmployeeId,
    findAllBillableEmployee,
    findAllNonBillableEmployee,
    findCompensationOfOneEmployeeInGivenYear,
    findCtcOfOneEmployeeInTheGivenYear,
    findOverheadOfOneEmployeeInTheGivenYear
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
    const response =  await deleteEmployee(req.params.id);
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

const updateEmployeeBankAccountDetails = async(req,res)=>{
    const resopnse =  await updateEmployeeBankAccount(req.body,req.params.id);
    return resopnse;
}
const findYourEmployeeIdDetails = async(req,res) => {
    const response = await findYourEmployeeId(req.params.emailId);
    return response;
}
const findAllBillableEmployeeDetails = async(req,res) => {
    const response = await findAllBillableEmployee();
    return response;
}

const findAllNonBillableEmployeeDetails = async(req,res) => {
    const response = await findAllNonBillableEmployee();
    return response;
}

const findCompensationOfOneEmployeeInGivenYearDetails = async(req,res) => {
    const response = await findCompensationOfOneEmployeeInGivenYear(req.params.year,req.params.id);
    return response;
}

const findCtcOfOneEmployeeInTheGivenYearDetails = async(req,res) =>{
    const response = await findCtcOfOneEmployeeInTheGivenYear(req.params.year,req.params.id);
    return response;
}

const findOverheadOfOneEmployeeInTheGivenYearDetails = async(req,res) => {
    const response = await findOverheadOfOneEmployeeInTheGivenYear(req.params.year);
    return response;
}
export {
    addEmployeeDetails,
    updateEmployeeDetails,
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
    findOverheadOfOneEmployeeInTheGivenYearDetails
};
