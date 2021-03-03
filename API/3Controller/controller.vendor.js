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
} from '../4Service/vendor_service';

const getVendorController = (id) => {
    return getVendorDetails(id);
};

const getAllVendorsController = () => {
    return getAllVendorsDetails();
};

const getVendorForFacilityController = (facility) => {
    return getVendorForFacilityDetails(facility);
};

const getVendorsEarningController = (year) => {
    return getVendorsEarningDetails();
};
const getVendorsEarningForFacilityController = (facility, year) => {
    return getVendorsEarningForFacilityDetails(facility, year);
};
const vendorEarningInYearController = (facility, year) => {
    return vendorEarningInYearDetails(facility, year);
};
const vendorEarningForFacilityInYearController = (facility, year) => {
    return vendorEarningForFacilityInYearDetails(facility, year);
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
