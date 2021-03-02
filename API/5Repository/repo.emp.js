import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();
const findAllEmployee = async () => {
    const query = 'Select * from Employee';
    // INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId';
    const data = await request.query(query);
    return data.recordsets[0];
};

const findOneEmployee = async (id) => {
    const query = `Select Employee.EmpId, Employee.FirstName,Employee.LastName,EmployeeContact.Office,EmployeeAddress.City,EmployeeAddress.District from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId where Employee.EmpId = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const addEmployee = async (object) => {
    console.log(object);
    const insertIntoEmp = `Insert into Employee (FirstName, LastName, Title, Gender, isBillable, Status, Email) values ('${object.FirstName}', '${object.LastName}', '${object.Title}', '${object.Gender}', ${object.isBillable}, '${object.Status}', '${object.Email}')`;
    await request.query(insertIntoEmp);
    const newEmpId = (await findAllEmployee()).length;
    console.log(newEmpId);
    const insertIntoAddress = `Insert into EmployeeAddress (EmpId, StreetAddress1, StreetAddress2, City, District, PostalCode, State, Country, IsPermanent)  Values (${newEmpId}, '${object.StreetAddress1}', '${object.StreetAddress2}', '${object.City}', '${object.District}', ${object.PostalCode}, '${object.State}', '${object.Country}', ${object.IsPermanent})`;
    await request.query(insertIntoAddress);
    const insertIntoContact = `Insert into EmployeeContact (EmpId, Office , Mobile, Landline) Values (${12}, ${object.Office}, ${object.Mobile}, ${
        object.LandLine
    })`;
    await request.query(insertIntoContact);
    return 'Record Inserted!\n';
};

const updateEmployee = async (body) => {
    const data = await request.query(`Update Employees set ${body.Column} = '${body.Detail}' where EmployeeID=${body.EmployeeID}`);
    return 'Record Updated!\n' + data;
};

//------NOT USING RN-------
const deleteEmployee = async (body) => {
    // const data = await request.query(
    //   `Delete from Employees where EmployeeID=${body.EmployeeID}`
    // );
    // return 'Record Deleted';
};

const findAllEmployeeInTheGivenYear = async (body) => {
    const query =
        'Select Employee.EmpId,Employee.FirstName,Employee.LastName,EmployeeContact.Office,EmployeeAddress.City,EmployeeAddress.District from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId where Employee.LeavingDate Is Null';
    const data = await request.query(query);
    return data.recordsets[0];
};

export { findOneEmployee, addEmployee, updateEmployee, deleteEmployee, findAllEmployee, findAllEmployeeInTheGivenYear };
