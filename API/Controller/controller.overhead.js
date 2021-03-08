import {
    getOverHeadDetails,
    getOverHeadWithAmountDetails,
    getOverHeadForFacilityDetails,
    getVendorForFacilityDetails,
<<<<<<< HEAD:API/3Controller/controller.overhead.js
    getOverheadCategoriesOfOneEmployeeInGivenYearDetails
} from '../4Service/overhead_service.js';
=======
} from '../Service/overhead_service.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Controller/controller.overhead.js

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
