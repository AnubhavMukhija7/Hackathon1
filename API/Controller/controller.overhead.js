import {
    getOverHeadDetails,
    getOverHeadWithAmountDetails,
    getOverHeadForFacilityDetails,
    getVendorForFacilityDetails,
    getAllFacilitiesDetails,
    updateOverheadDetails
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

const getAllFacilitiesController = () => {
    return getAllFacilitiesDetails();
};

const updateOverheadController = async(req) =>{
  return await updateOverheadDetails(req.body);
}

export {
    getOverHeadController,
    getOverHeadWithAmountController,
    getOverHeadForFacilityController,
    getVendorForFacilityController,
    getAllFacilitiesController,
    updateOverheadController
};
