import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from '../5Repository/employee.js';

const addEmpData = async (req, res) => {
  const response = await addEmployee(req.body);
  res.send(response);
};

const updateEmpData = async (req, res) => {
  const response = await updateEmployee(req.body);
  res.send(response);
};

const deleteEmpData = async (req, res) => {
  const response = await deleteEmployee(req.body);
  res.send(response);
};

const findAllEmpDetails = async (req, res) => {
  const response = await getEmployees();
  res.send(response);
};

const findOneEmpDetail = async (req, res) => {
  const response = await getEmployee(req.params.id);
  res.send(response);
};

export {
  addEmpData,
  updateEmpData,
  deleteEmpData,
  findAllEmpDetails,
  findOneEmpDetail,
};
