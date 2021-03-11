import { makeConnection } from '../Connection/connection.js';
import { convertToModel } from '../../Model/model.convert.js';
const request = await makeConnection();
const findAllEmployee = async () => {
    const query = `Select Employee.EmpId , Employee.Title,Employee.FirstName,
                 Employee.MiddleName , Employee.Lastname , Employee.Email,
                  Employee.Gender,Employee.Status,EmployeeAddress.City,
                  EmployeeAddress.State,EmployeeContact.Office
                  from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId
                  INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId Order By Employee.EmpId ASC`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const findOneEmployee = async (id) => {
    const query = `Select Employee.EmpId , Employee.Title,Employee.FirstName,
    Employee.MiddleName , Employee.Lastname , Employee.Email,
     Employee.Gender,Employee.Status,EmployeeAddress.City,
     EmployeeAddress.State,EmployeeContact.Office
     from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId
     INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId where Employee.EmpId = ${id}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const addEmployee = async (object) => {
    const insertIntoEmp = `EXEC InsertEmployee
    @Title='${object.Title}',@FirstName='${object.FirstName}',@MiddleName='${object.MiddleName}',@LastName='${object.LastName}',
    @Email='${object.Email}',@Gender='${object.Gender}',@IsBillable='${object.isBillable}',@Status='${object.Status}',@JoiningDate='${object.JoiningDate}',
    @LeavingDate='${object.LeavingDate}',@Office='${object.Office}',@Mobile='${object.Mobile}',@LandLine='${object.LandLine}',@StreetAddress1='${object.StreetAddress1}',
    @StreetAddress2='${object.StreetAddress2}',@City='${object.City}',@District='${object.District}',@PostalCode='${object.PostalCode}',@State='${object.State}',
    @Country='${object.Country}',@IsPermanent='${object.IsPermanent}',@BankName='${object.BankName}',@AccountNo='${object.AccountNo}',@IFSC='${object.IFSC}',
    @BranchName='${object.BranchName}',@PAN='${object.PAN}'`;
    await request.query(insertIntoEmp);
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
    return convertToModel(data.recordsets[0]);
};

const updateEmployee = async (object) => {
    object = new Map(Object.entries(object));
    object = Array.from(object);
    console.log(object);
    const tablesObjectQuery = `SELECT * FROM information_schema.tables`;
    const tablesObject = await request.query(tablesObjectQuery);
    console.log('All tables', tablesObject.recordset);
    const tablesArray = [];
    for (const item of tablesObject.recordset) {
        if (item.TABLE_NAME.includes('Emp')) {
            tablesArray.push(item.TABLE_NAME);
        }
    }
    for (const item of tablesArray) {
        for (let j = 0; j < object.length - 1; j++) {
            let updateQuery;
            const checkquery = `SELECT COL_LENGTH ('${item}','${object[j][0]}')`;
            const checkResult = await request.query(checkquery);
            const go = checkResult.recordset[0][''];
            if (go > 0) {
                if (typeof `${object[j][1]}` === Number) {
                    updateQuery = `UPDATE ${item} SET ${object[j][0]} = ${object[j][1]} where EmpId = ${object[object.length - 1][1]}`;
                } else {
                    updateQuery = `UPDATE ${item} SET ${object[j][0]} = '${object[j][1]}' where EmpId = ${object[object.length - 1][1]}`;
                }
                await request.query(updateQuery);
            }
        }
    }
    return 'Record updated!';
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
    return convertToModel(data);
};

const findAllNonBillableEmployee = async () => {
    const query = `SELECT *
    FROM [ExpenseTracker].[dbo].[Employee]
    WHERE [ExpenseTracker].[dbo].[Employee].[IsBillable]= 0`;
    const data = (await request.query(query)).recordset;
    return convertToModel(data);
};

const findCompensationOfOneEmployeeInGivenYear = async (year, id) => {
    const query = `Select SUM(Payhead) as TotalCompensation from EmployeePayhead where Year = ${year} and EmpId = ${id}
    GROUP BY EmpId;`;
    const data = (await request.query(query)).recordsets[0];
    return convertToModel(data);
};

const findCtcOfOneEmployeeInTheGivenYear = async (year, id) => {
    const query = `SELECT * FROM EmployeesCompensationForYear WHERE [Year] = ${year} and EmployeeId= ${id}`;
    const data = (await request.query(query)).recordset;
    return convertToModel(data);
};

const findOverheadOfOneEmployeeInTheGivenYear = async (year) => {
    const query = `select sum(FacilityAvailed.Amount)/(select count(EmpId) from Employee where LeavingDate Is NULL) As OverheadCost
    from FacilityAvailed INNER JOIN Facilities ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where Facilities.FacilityType = 'O' and FacilityAvailed.YEAR = ${year}`;
    const data = (await request.query(query)).recordset[0]['OverheadCost'];
    return data;
};
const findAllDetailsOfOneEmpoyee = async (id) => {
    const query = `Select *
    from Employee INNER JOIN EmployeeContact ON Employee.EmpId = EmployeeContact.EmpId
    INNER JOIN EmployeeAddress ON EmployeeContact.EmpId = EmployeeAddress.EmpId
    INNER JOIN EmpBankDetails ON Employee.EmpId = EmpBankDetails.EmpId
    WHERE Employee.EmpId = ${id}`;
    const data = (await request.query(query)).recordsets[0];
    return data;
};

const getUniques = async () => {
    const query1 = `Select Email from Employee`;
    const query2 = `Select PAN from EmpBankDetails`;
    const query3 = `Select AccountNo from EmpBankDetails`;
    const query4 = `Select Office from EmployeeContact`;
    const eMailDetails = (await request.query(query1)).recordsets[0];
    const panDetails = (await request.query(query2)).recordsets[0];
    const accDetails = (await request.query(query3)).recordsets[0];
    const officeDetails = (await request.query(query4)).recordsets[0];
    return { eMailDetails, panDetails, accDetails, officeDetails };
};

const getExpenseReport = async (year) => {
    const query = `SELECT * FROM EmployeesCompensationForYear WHERE [Year] = ${year}`;
    const data = (await request.query(query)).recordsets[0];
    return data;
};

export {
    findOneEmployee,
    addEmployee,
    deleteEmployee,
    findAllEmployee,
    findAllEmployeeInTheGivenYear,
    updateEmployee,
    findYourEmployeeId,
    findAllBillableEmployee,
    findAllNonBillableEmployee,
    findCompensationOfOneEmployeeInGivenYear,
    findCtcOfOneEmployeeInTheGivenYear,
    findOverheadOfOneEmployeeInTheGivenYear,
    findAllDetailsOfOneEmpoyee,
    getUniques,
    getExpenseReport,
};
