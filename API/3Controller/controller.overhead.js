import {
    getOverHeadDetails,
    getOverHeadWithAmountDetails,
    getOverHeadForFacilityDetails,
    getVendorForFacilityDetails,
    getOverheadCategoriesOfOneEmployeeInGivenYearDetails
} from '../4Service/overhead_service.js';

const getOverHeadController = () => {
    return getOverHeadDetails();
};

const getOverHeadWithAmountController = (year) => {
    return getOverHeadWithAmountDetails(year);
};
const getOverHeadForFacilityController = (benefit, year) => {
    return getOverHeadForFacilityDetails(benefit, year);
};

const getVendorForFacilityController = (benefit, year) => {
    return getVendorForFacilityDetails(benefit, year);
};


const getOverheadCategoriesOfOneEmployeeInGivenYearController = (year,id) => {
    return getOverheadCategoriesOfOneEmployeeInGivenYearDetails(year,id);
}
export { getOverHeadController,
     getOverHeadWithAmountController, 
     getOverHeadForFacilityController, 
     getVendorForFacilityController ,
    getOverheadCategoriesOfOneEmployeeInGivenYearController
    };
