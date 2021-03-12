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
    findAllDetailsOfOneVendor,
    getUniques
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
const validateData = async (data) => {
    const { companyDetails, panDetails, accDetails, officeMobileDetails } = await getUniques();
    console.log(companyDetails, panDetails, accDetails, officeMobileDetails);
    const phoneno = /^\d{10}$/;
    if (!data.PrimaryMobile.match(phoneno)) {
        return "'PrimaryMobile' should be valid and should contain 10 digits.";
    }
    if (data.FirstName.length < 2) {
        return "Length of 'FirstName' should be greater than 2";
    }
    if (companyDetails.indexOf({ VendorCompany: data.VendorCompany }) === -1) {
        return `Company name ${data.VendorCompany} already exists. Company Name should be unique.`;
    }
    if (data.EndDate.length > 1 && data.EndDate < data.StartDate) {
        return 'End date should occur after Start date';
    }
    if (panDetails.indexOf({ PAN: data.PAN }) === -1) {
        return `Vendor with PAN: ${data.PAN} already exists. PAN Number should be unique.`;
    }
    if (accDetails.indexOf({ AccountNumber: data.AccountNumber }) === -1) {
        return `Vendor with Account Number: ${data.AccountNumber} already exists. Account Number should be unique.`;
    }
    if (officeMobileDetails.indexOf({ PrimaryMobile: data.PrimaryMobile }) === -1) {
        return `Contact Number: ${data.PrimaryMobile} already exists. PrimaryNumber should be unique.`;
    }
    return 'Correct!';
};

const addVendorDetails = async (body) => {
    let result = await validateData(body);
    console.log('Results:', result);
    if (result === 'Correct!') {
        return await addVendor(body);
    }
    return result;
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
