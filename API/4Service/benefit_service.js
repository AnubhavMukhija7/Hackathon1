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
} from '../5Repository/repo.benefit.js';

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
};
