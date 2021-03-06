import {
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
} from '../Service/benefit_service.js';

const getAllBenefitController = () => {
    return getAllBenefitDetails();
};
const getTotalExpenseController = () => {
    return getTotalExpenseDetails();
};
const getTotalExpenseForGivenYearController = (year) => {
    return getTotalExpenseForGivenYearDetails(year);
};
const getEmpsForBenefitController = (benefit) => {
    return getEmpsForBenefitDetails(benefit);
};
const getEmpsForBenefitForGivenYearController = (benefit, year) => {
    return getEmpsForBenefitForGivenYearDetails(benefit, year);
};
const benefitExpenseForEmpController = (id) => {
    return benefitExpenseForEmpDetails(id);
};

const benefitAvailedController = (id) => {
    return benefitAvailedDetails(id);
};

const empExpenseForParticularBenefitController = (id, benefit) => {
    return empExpenseForParticularBenefitDetails(id, benefit);
};

const benefitExpenseController = async (benefit) => {
    return await benefitExpenseDetails(benefit);
};
const benefitExpenseForGivenYearController = async (benefit, year) => {
    return await benefitExpenseForGivenYearDetails(benefit, year);
};

export {
    getAllBenefitController,
    getTotalExpenseController,
    getTotalExpenseForGivenYearController,
    getEmpsForBenefitController,
    getEmpsForBenefitForGivenYearController,
    benefitExpenseForEmpController,
    benefitAvailedController,
    empExpenseForParticularBenefitController,
    benefitExpenseController,
    benefitExpenseForGivenYearController,
};
