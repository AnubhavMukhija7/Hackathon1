import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();
const findAllEmployee = async () => {
    const query = 'Select * from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId';
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
    const insertIntoEmp = `Insert into Employee (FirstName, LastName, Title, Gender, isBillable, Status, Email,JoiningDate,LeavingDate) values ('${object.FirstName}', '${object.LastName}', '${object.Title}', '${object.Gender}', ${object.isBillable}, '${object.Status}', '${object.Email}',${object.JoiningDate},${object.LeavingDate})`;
    await request.query(insertIntoEmp);
    let data = await request.query(`Select * from Employee`);
    data = data.recordsets[0];
    const newEmpId = (data).length;
    const insertIntoAddress = `Insert into EmployeeAddress (EmpId, StreetAddress1, StreetAddress2, City, District, PostalCode, State, Country, IsPermanent)  Values (${newEmpId}, '${object.StreetAddress1}', '${object.StreetAddress2}', '${object.City}', '${object.District}', ${object.PostalCode}, '${object.State}', '${object.Country}', ${object.IsPermanent})`;
    await request.query(insertIntoAddress);
    const insertIntoContact = `Insert into EmployeeContact (EmpId, Office,Mobile,LandLine) Values (${newEmpId}, ${object.Office},${object.Mobile},${object.LandLine})`;
    await request.query(insertIntoContact);
    const insertIntoEmpBankDetails = `Insert into EmpBankDetails (EmpId,BankName,AccountNo,IFSC,BranchName,PAN ) Values (${newEmpId},'${object.BankName}',${object.AccountNo},'${object.IFSC}','${object.BranchName}','${object.PAN}')`;
    await request.query(insertIntoEmpBankDetails);
    const monthNo = (await request.query(`SELECT MONTH(GETDATE())`)).recordset[0][''];
    const year = (await request.query(`SELECT YEAR(GETDATE())`)).recordset[0][''];
    const month = (await request.query(`select DateName( month , DateAdd( month , ${monthNo} , -1 ))`)).recordset[0][''];;
    const insertIntoEmployeePayhead = `Insert into EmployeePayhead (EmpId,Payhead,Month,Year) Values (${newEmpId},${object.Payhead},'${month}',${year})`;
    await request.query(insertIntoEmployeePayhead);
    return 'Record Inserted!\n';
};

const updateEmployee = async (object) => { 
    const data = await request.query(`Update Employees set ${object.Column} = '${object.Detail}' where EmployeeID=${object.EmployeeID}`);
    return 'Record Updated!\n' + data;
};

//------NOT USING RN-------
const deleteEmployee = async (object) => {
    // const data = await request.query(
    //   `Delete from Employees where EmployeeID=${object.EmployeeID}`
    // );
    // return 'Record Deleted';
};

const findAllEmployeeInTheGivenYear = async (year) => {
    const data = await request.query(`select Employee.EmpId,Employee.FirstName,Employee.LastName,EmployeeContact.Office,
    EmployeeAddress.City,EmployeeAddress.District from Employee
    INNER JOIN EmployeeContact ON
    Employee.EmpId = EmployeeContact.EmpId
    INNER JOIN EmployeeAddress ON
    EmployeeContact.EmpId = EmployeeAddress.EmpId 
    where Employee.LeavingDate Is NULL OR (YEAR(Employee.LeavingDate) >= ${year} AND YEAR(Employee.JoiningDate)<=${year})`);
    return data.recordsets[0];
};

export { findOneEmployee, addEmployee, updateEmployee, deleteEmployee, findAllEmployee, findAllEmployeeInTheGivenYear };
