//employee
import {
    addEmployeeDetails,
    deleteEmployeeDetails,
    findAllEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
    updateEmployeeBankAccountDetails,
    findYourEmployeeIdDetails,
    findAllBillableEmployeeDetails,
    findAllNonBillableEmployeeDetails,
    findCompensationOfOneEmployeeInGivenYearDetails,
    findCtcOfOneEmployeeInTheGivenYearDetails,
<<<<<<< HEAD:API/3Controller/controller.emp.js
    findOverheadOfOneEmployeeInTheGivenYearDetails,
=======
<<<<<<< HEAD:API/3Controller/controller.emp.js
    findOverheadOfOneEmployeeInTheGivenYearDetails,
    addingDetails
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Controller/controller.emp.js
} from '../4Service/emp_service.js';
=======
    findOverheadOfOneEmployeeInTheGivenYearDetails
} from '../Service/emp_service.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Controller/controller.emp.js

//employee
const addEmployeeController = async (req, res) => {
    res.send(await addEmployeeDetails(req, res));
};

const deleteEmployeeController = async (req, res) => {
    res.send(await deleteEmployeeDetails(req, res));
};

const findAllEmployeeController = async (req, res) => {
    res.send(await findAllEmployeeDetails(req, res));
};

const findOneEmployeeController = async (req, res) => {
    res.send(await findOneEmployeeDetails(req, res));
};

const updateEmployeeBankAccountController = async (req, res) => {
    res.send(await updateEmployeeBankAccountDetails(req, res));
};

const findAllBillableEmployeeController = async (req, res) => {
    res.send(await findAllBillableEmployeeDetails(req, res));
};

const findAllNonBillableEmployeeController = async (req, res) => {
    res.send(await findAllNonBillableEmployeeDetails(req, res));
};

const findCompensationOfOneEmployeeInGivenYearController = async (req, res) => {
    res.send(await findCompensationOfOneEmployeeInGivenYearDetails(req, res));
};

const findCtcOfOneEmployeeInTheGivenYearController = async (req, res) => {
    res.send(await findCtcOfOneEmployeeInTheGivenYearDetails(req, res));
};

const findOverheadOfOneEmployeeInTheGivenYearController = async (req, res) => {
    res.send(String(await findOverheadOfOneEmployeeInTheGivenYearDetails(req, res)));
};

const findAllEmployeeInTheGivenYearController = async (req, res, next) => {
    res.send(await findAllEmployeeInTheGivenYearDetails(req, res, next));
};

const findYourEmployeeIdController = async (req, res) => {
    const data = await findYourEmployeeIdDetails(req, res);
    res.send(String(data));
};

<<<<<<< HEAD:API/3Controller/controller.emp.js
=======
const addingController = async(req,res) =>{
    res.send(await addingDetails(req,res));
}
//export
//export { addVendor, updateVendor, deleteVendor, findAllVendor, findOneVendor};
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Controller/controller.emp.js
export {
    addEmployeeController,
    deleteEmployeeController,
    findAllEmployeeController,
    findOneEmployeeController,
    findAllEmployeeInTheGivenYearController,
    updateEmployeeBankAccountController,
    findYourEmployeeIdController,
    findAllBillableEmployeeController,
    findAllNonBillableEmployeeController,
    findCompensationOfOneEmployeeInGivenYearController,
    findCtcOfOneEmployeeInTheGivenYearController,
    findOverheadOfOneEmployeeInTheGivenYearController,
<<<<<<< HEAD:API/3Controller/controller.emp.js
=======
    addingController
>>>>>>> bbfd09d844f8ecea250655d3fed35903f1a509e4:API/Controller/controller.emp.js
};
