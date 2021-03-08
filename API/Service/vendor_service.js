import { getActiveVendorAndTheirFacilitiesController } from '../3Controller/controller.vendor.js';
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
    updateVendorFacility,
    deleteFacility,
    addVendor,
<<<<<<< HEAD:API/4Service/vendor_service.js
    getActiveVendorAndTheirFacilities
} from '../5Repository/repo.vendor.js';
=======
} from '../Repository/repo.vendor.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/vendor_service.js

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
<<<<<<< HEAD:API/4Service/vendor_service.js
}

const getActiveVendorAndTheirFacilitiesDetails = (req,res) => {
    return getActiveVendorAndTheirFacilities();
}
=======
};
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/vendor_service.js
export {
    getVendorDetails,
    getAllVendorsDetails,
    getVendorForFacilityDetails,
    getVendorsEarningDetails,
    getVendorsEarningForFacilityDetails,
    vendorEarningInYearDetails,
    vendorEarningForFacilityInYearDetails,
    addFacilityAddVendorDetails,
    updateVendorDetails,
    updateVendorFacilityDetails,
    deleteVendorDetails,
    deleteFacilityDetails,
    addVendorDetails,
<<<<<<< HEAD:API/4Service/vendor_service.js
    getActiveVendorAndTheirFacilitiesDetails
=======
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Service/vendor_service.js
};
