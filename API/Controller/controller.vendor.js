import {
    getVendorDetails,
    getAllVendorsDetails,
    getVendorForFacilityDetails,
    getVendorsEarningDetails,
    getVendorsEarningForFacilityDetails,
    vendorEarningInYearDetails,
    vendorEarningForFacilityInYearDetails,
    addFacilityDetails,
    updateVendorDetails,
    updateVendorFacilityDetails,
    deleteVendorDetails,
    deleteFacilityDetails,
    addVendorDetails,
    findAllDetailsOfOneVendorDetails
} from '../Service/vendor_service.js';

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

const addFacilityController = async (body) => {
    return await addFacilityDetails(body);
};

const updateVendorController = (req) => {
    return updateVendorDetails(req);
};

const updateVendorFacilityController = (body) => {
    return updateVendorFacilityDetails(body);
};

const deleteVendorController = (id) => {
    return deleteVendorDetails(id);
};
const addVendorController = (body) => {
    return addVendorDetails(body);
};

const findAllDetailsOfOneVendorController = async (req) => {
    return await findAllDetailsOfOneVendorDetails(req);
}
export {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addFacilityController,
    updateVendorController,
    updateVendorFacilityController,
    deleteVendorController,
    findAllDetailsOfOneVendorController,
    addVendorController,
};
