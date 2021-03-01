//employee
import {
  addEmpData,
  updateEmpData,
  deleteEmpData,
  findAllEmpDetails,
  findOneEmpDetail,
} from '../4Service/emp_service.js';

//vendors
import {
  addVen,
  updateVen,
  deleteVen,
  findAllVen,
  findOneVen,
} from '../4Service/vendor_service.js';

//employee
const addData = async (req, res) => {
  res.send(await addEmpData(req,res));
};

const updateEmp = async (req, res) => {
  res.send(await updateEmpData(req,res));
};

const deleteEmp = async (req, res) => {
  res.send(await deleteEmpData(req,res));
};

const findAllEmp = async (req, res) => {
  res.send(await findAllEmpDetails(req,res));
};

const findOneEmp = async (req, res) => {
  res.send(await findOneEmpDetail(req,res));
};

// for vendors
const addVendor = async (req, res) => {
  res.send(await addVen(req.body));
};

const updateVendor = async (req, res) => {
  res.send(await updateVen(req.body));
};

const deleteVendor = async (req, res) => {
  res.send(await deleteVen(req.body));
};

const findAllVendor = async (req, res) => {
   res.send(await findAllVen());
};

const findOneVendor = async (req, res) => {
  res.send(await findOneVen(req.params.id));
};

//export
export { addVendor, updateVendor, deleteVendor, findAllVendor, findOneVendor };
export { addData, updateEmp, deleteEmp, findAllEmp, findOneEmp };
