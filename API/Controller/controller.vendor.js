import {
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
<<<<<<< HEAD:API/3Controller/controller.vendor.js
    getActiveVendorAndTheirFacilitiesDetails
} from '../4Service/vendor_service.js';
=======
} from '../Service/vendor_service.js';
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Controller/controller.vendor.js

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

const addFacilityAddVendorController = async (body) => {
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
<<<<<<< HEAD:API/3Controller/controller.vendor.js
}

const getActiveVendorAndTheirFacilitiesController = (req,res) => {
    return getActiveVendorAndTheirFacilitiesDetails(req,res);
}
=======
};
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Controller/controller.vendor.js
export {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addFacilityAddVendorController,
    updateVendorController,
    updateVendorFacilityController,
    deleteVendorController,
    deleteFacilityController,
    addVendorController,
<<<<<<< HEAD:API/3Controller/controller.vendor.js
    getActiveVendorAndTheirFacilitiesController
=======
>>>>>>> 997d7cd72f33425bb710884ad3fd0a9e4108e2d2:API/Controller/controller.vendor.js
};
