import {
    getOverHeadDetails,
    getOverHeadWithAmountDetails,
    getOverHeadForFacilityDetails,
    getVendorForFacilityDetails,
} from '../Service/overhead_service.js';

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

export { getOverHeadController, getOverHeadWithAmountController, getOverHeadForFacilityController, getVendorForFacilityController };
