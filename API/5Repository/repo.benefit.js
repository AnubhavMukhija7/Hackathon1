import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const getAllBenefit = async () => {
    const query = `Select FacilityId, FacilityName, FacilityDescription from Facilities where isActive = '1' and FacilityType = 'B'`;
    const data = await request.query(query);
    return data.recordsets[0];
};
const getTotalExpense = async () => {
    const query = `Select sum(FacilityAvailed.Amount) as TotalBenefitAmount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityAvailed.[Year] = YEAR(GETDATE()) AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'B'`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getTotalExpenseForGivenYear = async (year) => {
    const query = `Select sum(FacilityAvailed.Amount) as TotalBenefitAmount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityAvailed.[Year] = ${year} AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'B'`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getEmpsForBenefit = async (benefit) => {
    const query = `Select FacilityAvailed.AvailedFor as EmployeeId, Employee.FirstName,Employee.LastName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    INNER JOIN Employee ON FacilityAvailed.AvailedFor = Employee.EmpId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE())`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getEmpsForBenefitForGivenYear = async (benefit, year) => {
    const query = `Select FacilityAvailed.AvailedFor as EmployeeId, Employee.FirstName,Employee.LastName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    INNER JOIN Employee ON FacilityAvailed.AvailedFor = Employee.EmpId
    where FacilityName = '${benefit}' and [Year] = ${year}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const benefitExpenseForEmp = async (id) => {
    const query = `Select FacilityName,  FacilityAvailed.Amount from Facilities 
    INNER JOIN FacilityAvailed ON
    Facilities.FacilityId = FacilityAvailed.FacilityId
    where Facilities.FacilityType = 'B' and AvailedFor = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const benefitAvailed = async (id) => {
    const query = `Select Facilities.FacilityName from FacilityAvailed
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityType = 'B' and [Year] = YEAR(GETDATE()) and AvailedFor =  ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const empExpenseForParticularBenefit = async (id, benefit) => {
    const query = `select Amount from FacilityAvailed 
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE()) and AvailedFor = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const benefitExpense = async (benefit) => {
    const query = `Select sum(Amount) as BenefitExpenseForYear from FacilityAvailed 
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = YEAR(GETDATE())`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const benefitExpenseForGivenYear = async (benefit, year) => {
    const query = `Select sum(Amount) as BenefitExpenseForYear from FacilityAvailed 
    INNER JOIN Facilities ON Facilities.FacilityId = FacilityAvailed.FacilityId
    where FacilityName = '${benefit}' and [Year] = ${year}`;
    const data = await request.query(query);
    return data.recordsets[0];
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
};
