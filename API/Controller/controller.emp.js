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
    findAllDetailsOfOneEmpoyeeDetails
} from '../Service/emp_service.js';

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

const updateEmployeeController = async (req, res) => {
    res.send(await updateEmployeeDetails(req, res));
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

const findAllEmployeeInTheGivenYearController = async (req, res, next) => {
    res.send(await findAllEmployeeInTheGivenYearDetails(req, res, next));
};

const findYourEmployeeIdController = async (req, res) => {
    const data = await findYourEmployeeIdDetails(req, res);
    res.send(String(data));
};


const findAllDetailsOfOneEmpoyeeController = async(req,res) => {
    const data = await findAllDetailsOfOneEmpoyeeDetails(req,res);
    res.send(data);
}
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
    findAllDetailsOfOneEmpoyeeController
};
