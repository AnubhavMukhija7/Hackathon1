// employee
import {
  addEmpData,
  updateEmpData,
  deleteEmpData,
  findAllEmpDetails,
  findOneEmpDetail,
} from '../4Service/emp_service.js';

// vendors
import {
  addVen,
  updateVen,
  deleteVen,
  findAllVen,
  findOneVen,
} from '../4Service/vendor_service.js';

// employee
const addData = async (req, res) => {
  const response = await addEmpData(req.body);
  res.send(response);
};

const updateEmp = async (req, res) => {
  const response = await updateEmpData(req.body);
  res.send(response);
};

const deleteEmp = async (req, res) => {
  const response = await deleteEmpData(req.body);
  res.send(response);
};

const findAllEmp = async (req, res) => {
  const response = await findAllEmpDetails();
  res.send(response);
};

const findOneEmp = async (req, res) => {
  const response = await findOneEmpDetail(req.params.id);
  res.send(response);
};

// for vendors
const addVendor = async (req, res) => {
  const response = await addVen(req.body);
  res.send(response);
};

const updateVendor = async (req, res) => {
  const response = await updateVen(req.body);
  res.send(response);
};

const deleteVendor = async (req, res) => {
  const response = await deleteVen(req.body);
  res.send(response);
};

const findAllVendor = async (req, res) => {
  const response = await findAllVen();
  res.send(response);
};

const findOneVendor = async (req, res) => {
  const response = await findOneVen(req.params.id);
  res.send(response);
};

//export
export { addVendor, updateVendor, deleteVendor, findAllVendor, findOneVendor };
export { addData, updateEmp, deleteEmp, findAllEmp, findOneEmp };
