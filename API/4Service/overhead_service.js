import { getOverHead, getOverHeadWithAmount, getOverHeadForFacility, getVendorForFacility } from '../5Repository/repo.overhead.js';

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

export { getOverHeadDetails, getOverHeadWithAmountDetails, getOverHeadForFacilityDetails, getVendorForFacilityDetails };
