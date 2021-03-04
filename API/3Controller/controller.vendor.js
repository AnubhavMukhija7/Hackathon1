import {
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
} from '../4Service/vendor_service.js';

const getVendorController = async (id) => {
    return await getVendorDetails(id);
};

const getAllVendorsController = async () => {
    return await getAllVendorsDetails();
};

const getVendorForFacilityController = (facility) => {
    return getVendorForFacilityDetails(facility);
};

const getVendorsEarningController = (year) => {
    return getVendorsEarningDetails(year);
};
const getVendorsEarningForFacilityController = (facility, year) => {
    return getVendorsEarningForFacilityDetails(facility, year);
};
const vendorEarningInYearController = (id, year) => {
    return vendorEarningInYearDetails(id, year);
};
const vendorEarningForFacilityInYearController = (id, facility, year) => {
    return vendorEarningForFacilityInYearDetails(id, facility, year);
};

const addVendorFacilityController = (object) => {
    return addVendorFacilityDetails(object);
};
const addVendorController = (body) => {
    return addVendorDetails(body);
};

const updateVendorController = (body) => {
    return updateVendorDetails(body);
};

const updateVendorFacilityController = (body) => {
    return updateVendorFacilityDetails(body);
};

const deleteVendorController = (body) => {
    return deleteVendorDetails(body);
};

const deleteFacilityController = (body) => {
    return deleteFacilityDetails(body);
};
export {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addVendorFacilityController,
    addVendorController,
    updateVendorController,
    updateVendorFacilityController,
    deleteVendorController,
    deleteFacilityController,
};
