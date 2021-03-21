import {
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
    getData
} from '../Repository/repo.benefit.js';

const getAllBenefitDetails = async () => {
    return await getAllBenefit();
};

const getTotalExpenseDetails = async () => {
    return await getTotalExpense();
};

const getTotalExpenseForGivenYearDetails = async (year) => {
    return await getTotalExpenseForGivenYear(year);
};

const getEmpsForBenefitDetails = async (benefit) => {
    return await getEmpsForBenefit(benefit);
};

const getEmpsForBenefitForGivenYearDetails = async (benefit, year) => {
    return await getEmpsForBenefitForGivenYear(benefit, year);
};

const benefitExpenseForEmpDetails = async (id) => {
    return await benefitExpenseForEmp(id);
};

const benefitAvailedDetails = async (id) => {
    return await benefitAvailed(id);
};

const empExpenseForParticularBenefitDetails = async (id, benefit) => {
    return await empExpenseForParticularBenefit(id, benefit);
};

const benefitExpenseDetails = async (benefit) => {
    return await benefitExpense(benefit);
};
const benefitExpenseForGivenYearDetails = async (benefit, year) => {
    return await benefitExpenseForGivenYear(benefit, year);
};

const updateBenefitDetails = async(body)=>{
  return await updateBenefit(body);
}

const getDataDetails = async(id)=>{
  return await getData(id);
}

export {
    getAllBenefitDetails,
    getTotalExpenseDetails,
    getTotalExpenseForGivenYearDetails,
    getEmpsForBenefitDetails,
    getEmpsForBenefitForGivenYearDetails,
    benefitExpenseForEmpDetails,
    benefitAvailedDetails,
    empExpenseForParticularBenefitDetails,
    benefitExpenseDetails,
    benefitExpenseForGivenYearDetails,
    updateBenefitDetails,
    getDataDetails
};
