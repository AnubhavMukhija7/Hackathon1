//employee
import {
    addEmployeeDetails,
    updateEmployeeDetails,
    deleteEmployeeDetails,
    findAllEmployeeDetails,
    findOneEmployeeDetails,
    findAllEmployeeInTheGivenYearDetails,
} from '../4Service/emp_service.js';

//employee
const addEmployeeController = async (req, res) => {
    res.send(await addEmployeeDetails(req, res));
};

const updateEmployeeController = async (req, res) => {
    res.send(await updateEmployeeDetails(req, res));
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

// // for vendors
// const addVendorController = async (req, res) => {
//   res.send(await addVendorDetails(req.body));
// };

// const updateVendorController = async (req, res) => {
//   res.send(await updateVendorDetails(req.body));
// };

// const deleteVendorController = async (req, res) => {
//   res.send(await deleteVendorDetails(req.body));
// };

// const findAllVendorController = async (req, res) => {
//    res.send(await findAllVendorDetails());
// };

const findAllEmployeeInTheGivenYearController = async (req, res) => {
    res.send(findAllEmployeeInTheGivenYearDetails());
};

//export
//export { addVendor, updateVendor, deleteVendor, findAllVendor, findOneVendor};
export {
    addEmployeeController,
    updateEmployeeController,
    deleteEmployeeController,
    findAllEmployeeController,
    findOneEmployeeController,
    findAllEmployeeInTheGivenYearController,
};
