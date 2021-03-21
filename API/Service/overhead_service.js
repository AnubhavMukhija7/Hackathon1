import { getOverHead, getOverHeadWithAmount, getOverHeadForFacility, getVendorForFacility, getAllFacilities, updateOverhead } from '../Repository/repo.overhead.js';

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

const getAllFacilitiesDetails = () => {
    return getAllFacilities();
};

const updateOverheadDetails = async(body)=>{
  return await updateOverhead(body);
}

export { getOverHeadDetails, getOverHeadWithAmountDetails, getOverHeadForFacilityDetails, getVendorForFacilityDetails, getAllFacilitiesDetails, updateOverheadDetails };
