import {
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
    addVendorDetails,
    getActiveVendorAndTheirFacilitiesDetails
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
const addFacilityAddVendorController = async(body) => {
    return await addFacilityAddVendorDetails(body);
};

const updateVendorController = (body) => {
    return updateVendorDetails(body);
};

const updateVendorFacilityController = (body) => {
    return updateVendorFacilityDetails(body);
};

const deleteVendorController = (id) => {
    return deleteVendorDetails(id);
};

const deleteFacilityController = (body) => {
    return deleteFacilityDetails(body);
};

const addVendorController = (body) => {
    return addVendorDetails(body);
}

const getActiveVendorAndTheirFacilitiesController = (req,res) => {
    return getActiveVendorAndTheirFacilitiesDetails(req,res);
}
export {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addVendorFacilityController,
    addFacilityAddVendorController,
    updateVendorController,
    updateVendorFacilityController,
    deleteVendorController,
    deleteFacilityController,
    addVendorController,
    getActiveVendorAndTheirFacilitiesController
};
