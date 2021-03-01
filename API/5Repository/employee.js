import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();
const getEmployees = async () => {
  const data = await request.query('Select * from Employee');
  return data.recordsets[0];
};

const getEmployee = async (id) => {
  const data = await request.query(
    `Select * from Employees where EmpID = ${id}`
  );
  console.log('hello');
  return data.recordsets[0];
};

const addEmployee = async (body) => {
  const data = await request.query(
    `Insert into Employees (EmployeeID,FirstName, LastName, etc) values (${body.EmployeeID},'${body.FirstName}', '${body.LastName}')`
  );
  return 'Record Inserted';
};

const updateEmployee = async (body) => {
  const data = await request.query(
    `Update Employees set ${body.Column} = '${body.Detail}' where EmployeeID=${body.EmployeeID}`
  );
  return 'Record Updated';
};

//------NOT USING RN-------
const deleteEmployee = async (body) => {
  // const data = await request.query(
  //   `Delete from Employees where EmployeeID=${body.EmployeeID}`
  // );
  // return 'Record Deleted';
};

export {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
