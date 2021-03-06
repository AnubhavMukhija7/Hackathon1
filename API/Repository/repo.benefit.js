import { makeConnection } from '../Connection/connection.js';
import { convertToModel } from '../../Model/model.convert.js';
const request = await makeConnection();

const getAllBenefit = async () => {
    const query = `Select * from Facilities where isActive = '1' and FacilityType = 'B'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};
const getTotalExpense = async () => {
    const query = `Select sum(FacilityAvailed.Amount) as Amount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityAvailed.[Year] = YEAR(GETDATE()) AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'B'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getTotalExpenseForGivenYear = async (year) => {
    const query = `Select Sum(FacilityAvailed.Amount) as Amount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityAvailed.[Year] = ${year} AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'B'`;
    const data = await request.query(query);
    if (data.recordset[0].Amount === null) {
        return [];
    }
    return convertToModel(data.recordsets[0]);
};

// need of shifting this?
const getEmpsForBenefit = async (benefit) => {
    const query = `Select FacilityAvailed.AvailedFor as EmpId, Employee.FirstName,Employee.LastName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    INNER JOIN Employee ON FacilityAvailed.AvailedFor = Employee.EmpId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE())`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getEmpsForBenefitForGivenYear = async (benefit, year) => {
    const query = `Select FacilityAvailed.AvailedFor as EmpId, Employee.FirstName,Employee.LastName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    INNER JOIN Employee ON FacilityAvailed.AvailedFor = Employee.EmpId
    where FacilityName = '${benefit}' and [Year] = ${year}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const benefitExpenseForEmp = async (id, year) => {
    const query = `Select FacilityName,  SUM(FacilityAvailed.Amount) as Amount from Facilities
    INNER JOIN FacilityAvailed ON
    Facilities.FacilityId = FacilityAvailed.FacilityId
    where Facilities.FacilityType = 'B' and AvailedFor = ${id} and [Year] = ${year}
    Group By FacilityName`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const benefitAvailed = async (id) => {
    const query = `Select Facilities.FacilityName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityType = 'B' and [Year] = YEAR(GETDATE()) and AvailedFor =  ${id}
    Group By FacilityName`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const empExpenseForParticularBenefit = async (id, benefit) => {
    const query = `select Amount from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE()) and AvailedFor = ${id}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const benefitExpense = async (benefit) => {
    const query = `Select sum(Amount) as Amount from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE())`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const benefitExpenseForGivenYear = async (benefit, year) => {
    const query = `Select sum(Amount) as Amount from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = ${year}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const updateBenefit = async (body) => {
    const query = `UPDATE Facilities
    SET
    IsActive = ${body.IsActive},
    FacilityDescription = '${body.FacilityDescription}'
    where FacilityId=${body.FacilityId}`;
    await request.query(query);
    return 'Record Updated!';
};

const getData = async (id) => {
    const query = `Select FacilityId, FacilityName, FacilityDescription, IsActive from Facilities where FacilityId = ${id}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

export {
    getAllBenefit,
    getTotalExpense,
    getTotalExpenseForGivenYear,
    getEmpsForBenefit,
    getEmpsForBenefitForGivenYear,
    benefitExpenseForEmp,
    benefitAvailed,
    empExpenseForParticularBenefit,
    benefitExpense,
    benefitExpenseForGivenYear,
    updateBenefit,
    getData,
};
