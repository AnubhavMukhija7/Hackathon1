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
    updateBenefitDetails,
    getDataDetails,
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
const benefitExpenseForEmpController = (id, year) => {
    return benefitExpenseForEmpDetails(id, year);
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

const updateBenefitController = async (req) => {
    return await updateBenefitDetails(req.body);
};

const getDataController = async (req) => {
    return await getDataDetails(req.params.id);
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
    updateBenefitController,
    getDataController,
};
