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
  return await deleteEmployee(req.body);
};

const findAllEmpDetails = async (req, res) => {
  return await getEmployees();
};

const findOneEmpDetail = async (req, res) => {
  console.log('ping me');
  return await getEmployee(parseInt(req.params.id));
};

export {
  addEmpData,
  updateEmpData,
  deleteEmpData,
  findAllEmpDetails,
  findOneEmpDetail,
};
