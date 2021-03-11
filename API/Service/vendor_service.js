import { findAllDetailsOfOneVendorController } from '../Controller/controller.vendor.js';
import {
    getVendor,
    getAllVendors,
    addFacility,
    updateVendor,
    deleteVendor,
    getVendorForFacility,
    getVendorsEarning,
    getVendorsEarningForFacility,
    vendorEarningInYear,
    vendorEarningForFacilityInYear,
    updateVendorFacility,
    deleteFacility,
    addVendor,
    findAllDetailsOfOneVendor
} from '../Repository/repo.vendor.js';

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

const addFacilityDetails = async (body) => {
    return await addFacility(body);
};

const updateVendorDetails = (req) => {
    return updateVendor(req.body);
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
};

const findAllDetailsOfOneVendorDetails = async(req) => {
    return await findAllDetailsOfOneVendor(req.params.id);
}
export {
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
};
