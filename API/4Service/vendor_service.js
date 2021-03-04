import {
    getVendor,
    getAllVendors,
    addFacilityAddVendor,
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
    addVendor
} from '../5Repository/repo.vendor.js';

const getVendorDetails = async (id) => {
    return await getVendor(id);
};

const getAllVendorsDetails = async () => {
    return await getAllVendors();
};

const getVendorForFacilityDetails = (facility) => {
    return getVendorForFacility(facility);
};

const getVendorsEarningDetails = (year) => {
    return getVendorsEarning(year);
};
const getVendorsEarningForFacilityDetails = (facility, year) => {
    return getVendorsEarningForFacility(facility, year);
};
const vendorEarningInYearDetails = (id, year) => {
    return vendorEarningInYear(id, year);
};
const vendorEarningForFacilityInYearDetails = (id, facility, year) => {
    return vendorEarningForFacilityInYear(id, facility, year);
};

const addVendorFacilityDetails = (object) => {
    return addVendorFacility(object);
};
const addFacilityAddVendorDetails = async (body) => {
    return await addFacilityAddVendor(body);
};

const updateVendorDetails = (body) => {
    return updateVendor(body);
};

const updateVendorFacilityDetails = (body) => {
    return updateVendorFacility(body);
};

const deleteVendorDetails = (id) => {
    return deleteVendor(id);
};

const deleteFacilityDetails = (body) => {
    return deleteFacility(body);
};

const addVendorDetails = (body) => {
    return addVendor(body);
}
export {
    getVendorDetails,
    getAllVendorsDetails,
    getVendorForFacilityDetails,
    getVendorsEarningDetails,
    getVendorsEarningForFacilityDetails,
    vendorEarningInYearDetails,
    vendorEarningForFacilityInYearDetails,
    addVendorFacilityDetails,
    addFacilityAddVendorDetails,
    updateVendorDetails,
    updateVendorFacilityDetails,
    deleteVendorDetails,
    deleteFacilityDetails,
    addVendorDetails
};
