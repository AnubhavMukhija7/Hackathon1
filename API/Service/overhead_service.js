import { getOverHead, getOverHeadWithAmount, getOverHeadForFacility, getVendorForFacility, getAllFacilities } from '../Repository/repo.overhead.js';

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

export { getOverHeadDetails, getOverHeadWithAmountDetails, getOverHeadForFacilityDetails, getVendorForFacilityDetails, getAllFacilitiesDetails };
