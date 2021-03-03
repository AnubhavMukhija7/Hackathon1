import {
    getVendor,
    getAllVendors,
    addVendor,
    updateVendor,
    deleteVendor,
    getVendorForFacility,
    getVendorsEarning,
    getVendorsEarningForFacility,
    vendorEarningInYear,
    vendorEarningForFacilityInYear,
    addVendorFacility,
    updateVendorFacility,
    deleteFacility,
} from '../5Repository/vendor.js';

const getVendorDetails = (id) => {
    return getVendor(id);
};

const getAllVendorsDetails = () => {
    return getAllVendors();
};

const getVendorForFacilityDetails = (facility) => {
    return getVendorForFacility(facility);
};

const getVendorsEarningDetails = (year) => {
    return getVendorsEarning();
};
const getVendorsEarningForFacilityDetails = (facility, year) => {
    return getVendorsEarningForFacility(facility, year);
};
const vendorEarningInYearDetails = (facility, year) => {
    return vendorEarningInYear(facility, year);
};
const vendorEarningForFacilityInYearDetails = (facility, year) => {
    return vendorEarningForFacilityInYear(facility, year);
};

const addVendorFacilityDetails = (object) => {
    return addVendorFacility(object);
};
const addVendorDetails = (body) => {
    return addVendor(body);
};

const updateVendorDetails = (body) => {
    return updateVendor(body);
};

const updateVendorFacilityDetails = (body) => {
    return updateVendorFacility(body);
};

const deleteVendorDetails = (body) => {
    return deleteVendor(body);
};

const deleteFacilityDetails = (body) => {
    return deleteFacility(body);
};

export {
    getVendorDetails,
    getAllVendorsDetails,
    getVendorForFacilityDetails,
    getVendorsEarningDetails,
    getVendorsEarningForFacilityDetails,
    vendorEarningInYearDetails,
    vendorEarningForFacilityInYearDetails,
    addVendorFacilityDetails,
    addVendorDetails,
    updateVendorDetails,
    updateVendorFacilityDetails,
    deleteVendorDetails,
    deleteFacilityDetails,
};
