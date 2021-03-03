import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const getVendor = async (id) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getAllVendors = async () => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorForFacility = async (facility) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorsEarning = async (year) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorsEarningForFacility = async (facility, year) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const vendorEarningInYear = async (facility, year) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const vendorEarningForFacilityInYear = async (facility, year) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

// extract vendor id from here
const addVendorFacility = async (object) => {
    const query = ``;
    const data = await request.query(query);
    return data.recordsets[0];
};

const addVendor = async (body) => {
    const query = `Insert into Vendors (VendorID,FirstName, LastName, etc) values (${body.VendorID},'${body.FirstName}', '${body.LastName}')`;
    await request.query(query);
    return 'Record Inserted';
};

const updateVendor = async (body) => {
    const query = `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`;
    await request.query(query);
    return 'Record Updated';
};

const updateVendorFacility = async (body) => {
    const query = `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`;
    await request.query(query);
    return 'Record Updated';
};

//------NOT USING RN-------
const deleteVendor = async (body) => {
    // const data = await request.query(
    //   `Delete from Vendors where VendorID=${body.VendorID}`
    // );
    // return 'Record Deleted';
};

const deleteFacility = async (body) => {
    const query = ``;
    await request.query(query);
    return 'Facility Deleted';
};

export {
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
};
