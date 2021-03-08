import { getOverHead, 
    getOverHeadWithAmount, 
    getOverHeadForFacility, 
    getVendorForFacility ,
    getOverheadCategoriesOfOneEmployeeInGivenYear
 } from '../5Repository/repo.overhead.js';

const getOverHeadDetails = () => {
    return getOverHead();
};
const getOverHeadWithAmountDetails = (year) => {
    return getOverHeadWithAmount(year);
};
const getOverHeadForFacilityDetails = (benefit, year) => {
    return getOverHeadForFacility(benefit, year);
};
const getVendorForFacilityDetails = (benefit, year) => {
    return getVendorForFacility(benefit, year);
};

const getOverheadCategoriesOfOneEmployeeInGivenYearDetails = (year,id) => {
    return getOverheadCategoriesOfOneEmployeeInGivenYear(year,id);
}

export { getOverHeadDetails,
     getOverHeadWithAmountDetails, 
     getOverHeadForFacilityDetails, 
     getVendorForFacilityDetails ,
    getOverheadCategoriesOfOneEmployeeInGivenYearDetails
 };
