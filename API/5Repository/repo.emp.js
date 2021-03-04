import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();
const findAllEmployee = async () => {
    const query = `Select Employee.EmpId , Employee.Title,Employee.FirstName
                  ,Employee.MiddleName , Employee.Lastname , Employee.Email,
                  Employee.Gender,Employee.Status,EmployeeAddress.City,
                  EmployeeAddress.State,EmployeeContact.Office
                  from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const findOneEmployee = async (id) => {
    const query = `Select Employee.EmpId, Employee.FirstName,Employee.LastName,EmployeeContact.Office,EmployeeAddress.City,EmployeeAddress.District from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId where Employee.EmpId = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const addEmployee = async (object) => {
    const insertIntoEmp = `Insert into Employee (FirstName, LastName, Title, Gender, isBillable, Status, Email,JoiningDate,LeavingDate) values ('${object.FirstName}', '${object.LastName}', '${object.Title}', '${object.Gender}', ${object.isBillable}, '${object.Status}', '${object.Email}',${object.JoiningDate},${object.LeavingDate})`;
    await request.query(insertIntoEmp);
    let data = await request.query(`Select * from Employee`);
    data = data.recordsets[0];
    const newEmpId = data.length;
    const insertIntoAddress = `Insert into EmployeeAddress (EmpId, StreetAddress1, StreetAddress2, City, District, PostalCode, State, Country, IsPermanent)  Values (${newEmpId}, '${object.StreetAddress1}', '${object.StreetAddress2}', '${object.City}', '${object.District}', ${object.PostalCode}, '${object.State}', '${object.Country}', ${object.IsPermanent})`;
    await request.query(insertIntoAddress);
    const insertIntoContact = `Insert into EmployeeContact (EmpId, Office,Mobile,LandLine) Values (${newEmpId}, ${object.Office},${object.Mobile},${object.LandLine})`;
    await request.query(insertIntoContact);
    const insertIntoEmpBankDetails = `Insert into EmpBankDetails (EmpId,BankName,AccountNo,IFSC,BranchName,PAN ) Values (${newEmpId},'${object.BankName}',${object.AccountNo},'${object.IFSC}','${object.BranchName}','${object.PAN}')`;
    await request.query(insertIntoEmpBankDetails);
    const monthNo = (await request.query(`SELECT MONTH(GETDATE())`)).recordset[0][''];
    const year = (await request.query(`SELECT YEAR(GETDATE())`)).recordset[0][''];
    const month = (await request.query(`select DateName( month , DateAdd( month , ${monthNo} , -1 ))`)).recordset[0][''];
    const insertIntoEmployeePayhead = `Insert into EmployeePayhead (EmpId,Payhead,Month,Year) Values (${newEmpId},${object.Payhead},'${month}',${year})`;
    await request.query(insertIntoEmployeePayhead);
    return 'Record Inserted!\n';
};

//------NOT USING RN-------
const deleteEmployee = async (id) => {
    const query = `Update  Employee 
                set [Status] = 'Terminated'
                where Employee.EmpId = ${id}`;
    await request.query(query);
    return 'Record Deleted';
};

const findAllEmployeeInTheGivenYear = async (year) => {
    const data = await request.query(`Select Employee.EmpId,Employee.FirstName,Employee.LastName,EmployeeContact.Office,
    EmployeeAddress.City,EmployeeAddress.District from Employee
    INNER JOIN EmployeeContact ON
    Employee.EmpId = EmployeeContact.EmpId
    INNER JOIN EmployeeAddress ON
    EmployeeContact.EmpId = EmployeeAddress.EmpId 
    where ((YEAR(Employee.LeavingDate) >= ${year} OR YEAR(Employee.LeavingDate) Is NULL) AND YEAR(Employee.JoiningDate) <= ${year})`);
    return data.recordsets[0];
};

const updateEmployeeBankAccount = async (object, id) => {
    const query = `UPDATE [ExpenseTracker].[dbo].[EmpBankDetails]
                   set BankName='${object.BankName}',AccountNo=${object.AccountNo},IFSC='${object.IFSC}',BranchName='${object.BranchName}'
                   where EmpID = ${id};`;
    const data = await request.query(query);
    return 'Bank Record updated';
};

const findYourEmployeeId = async (emailId) => {
    const query = `
    SELECT [ExpenseTracker].[dbo].[Employee].[EmpId]
    FROM [ExpenseTracker].[dbo].[Employee]
    WHERE [ExpenseTracker].[dbo].[Employee].[Email] = '${emailId}'`;
    const data = (await request.query(query)).recordset[0]['EmpId'];
    return data;
};

const findAllBillableEmployee = async () => {
    const query = `SELECT *
    FROM [ExpenseTracker].[dbo].[Employee]
    WHERE [ExpenseTracker].[dbo].[Employee].[IsBillable]=1`;
    const data = (await request.query(query)).recordset;
    return data;
};

const findAllNonBillableEmployee = async () => {
    const query = `SELECT *
    FROM [ExpenseTracker].[dbo].[Employee]
    WHERE [ExpenseTracker].[dbo].[Employee].[IsBillable]= 0`;
    const data = (await request.query(query)).recordset;
    return data;
};

const findCompensationOfOneEmployeeInGivenYear = async (year, id) => {
    const query = `Select Employee.EmpId,Employee.FirstName,Employee.LastName,EmployeeContact.Office,
    EmployeeAddress.City,EmployeeAddress.District,sum(EmployeePayhead.Payhead) as TotalCompensation
    from EmployeePayhead INNER JOIN Employee ON
    Employee.EmpId = EmployeePayhead.EmpId
    INNER JOIN EmployeeContact ON
    Employee.EmpId = EmployeeContact.EmpId
    INNER JOIN EmployeeAddress ON
    EmployeeContact.EmpId = EmployeeAddress.EmpId
    where ((YEAR(Employee.LeavingDate) >=${year} OR YEAR(Employee.LeavingDate) Is NULL) AND YEAR(Employee.JoiningDate) <= ${year}) and Employee.EmpId = ${id}
    GROUP BY Employee.EmpId,Employee.FirstName,Employee.LastName,EmployeeContact.Office,
    EmployeeAddress.City,EmployeeAddress.District`;
    const data = (await request.query(query)).recordsets[0];
    return data;
};

const findCtcOfOneEmployeeInTheGivenYear = async (year, id) => {
    const query = `select EmployeeId,sum(CTC) as CTC from
    (select EmployeeId,TotalCompensation as CTC From
    (select EmployeePayhead.EmpId as EmployeeId,sum(EmployeePayhead.Payhead) as TotalCompensation
    from EmployeePayhead INNER JOIN Employee ON
    Employee.EmpId = EmployeePayhead.EmpId  and EmployeePayhead.Year = ${year} 
    GROUP BY EmployeePayhead.EmpId) Compensation
    UNION
    select EmployeeId,TotalBenefitAmountOfEmployeeForTheYear From
    (select FacilityAvailed.AvailedFor as EmployeeId,sum(FacilityAvailed.Amount) as TotalBenefitAmountOfEmployeeForTheYear
    from FacilityAvailed INNER JOIN Facilities ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where Facilities.FacilityType = 'B' and FacilityAvailed.YEAR = ${year}
    GROUP BY FacilityAvailed.AvailedFor) TotalBenefitOfEmployee )  CTC
    WHERE EmployeeId=${id}
    GROUP BY EmployeeId`;
    const data = (await request.query(query)).recordset;
    return data;
};

const findOverheadOfOneEmployeeInTheGivenYear = async (year) => {
    const query = `select sum(FacilityAvailed.Amount)/(select count(EmpId) from Employee where LeavingDate Is NULL) As OverheadCost
    from FacilityAvailed INNER JOIN Facilities ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where Facilities.FacilityType = 'O' and FacilityAvailed.YEAR = ${year}`;
    const data = (await request.query(query)).recordset[0]['OverheadCost'];
    return data;
};

export {
    findOneEmployee,
    addEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
    updateEmployeeBankAccount,
    findYourEmployeeId,
    findAllBillableEmployee,
    findAllNonBillableEmployee,
    findCompensationOfOneEmployeeInGivenYear,
    findCtcOfOneEmployeeInTheGivenYear,
    findOverheadOfOneEmployeeInTheGivenYear,
};
