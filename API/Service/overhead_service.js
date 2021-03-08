<<<<<<< HEAD:API/4Service/overhead_service.js
import { getOverHead, 
    getOverHeadWithAmount, 
    getOverHeadForFacility, 
    getVendorForFacility ,
    getOverheadCategoriesOfOneEmployeeInGivenYear
 } from '../5Repository/repo.overhead.js';
=======
import { getOverHead, getOverHeadWithAmount, getOverHeadForFacility, getVendorForFacility } from '../Repository/repo.overhead.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/overhead_service.js

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
