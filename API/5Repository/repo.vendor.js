import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const getVendor = async (id) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,Facilities.FacilityName,
    VendorName.FirstName,VendorMobile.PrimaryMobile,Vendor.IsActive FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId where Vendor.VendorId = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getAllVendors = async () => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,Facilities.FacilityName FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorForFacility = async (facility) => {
    console.log('safafasfasfasf', facility);
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,
    VendorName.FirstName,VendorMobile.PrimaryMobile FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId where Vendor.EndDate Is NULL and Facilities.FacilityName = '${facility}'`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorsEarning = async (year) => {
    const query = `
    SELECT Vendor.VendorId,Vendor.VendorCompany,sum(VendorPayment.Amount)as Amount,VendorPayment.[Year] FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorPayment ON
    VendorName.VendorId = VendorPayment.VendorId
    where Vendor.EndDate Is NULL and VendorPayment.[Year] = ${year}
    GROUP BY Vendor.VendorId,Vendor.VendorCompany,VendorPayment.[Year]`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const getVendorsEarningForFacility = async (facility, year) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany, Facilities.FacilityName,
    VendorName.FirstName,VendorMobile.PrimaryMobile, SUM(VendorPayment.Amount) as Amount,
    VendorPayment.[Year] FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId INNER JOIN VendorPayment ON
    VendorMobile.VendorId = VendorPayment.VendorId where Vendor.EndDate Is NULL
     and Facilities.FacilityName = '${facility}' and Year = ${year}
    group by 
    Vendor.VendorId,Vendor.VendorCompany, Facilities.FacilityName,
    VendorName.FirstName,VendorMobile.PrimaryMobile,VendorPayment.[Year]`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const vendorEarningInYear = async (id, year) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,sum(VendorPayment.Amount)as Amount,VendorPayment.[Year] FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorPayment ON
    VendorName.VendorId = VendorPayment.VendorId
    where Vendor.EndDate Is NULL and VendorPayment.[Year] = ${year} and Vendor.VendorId=${id}
    GROUP BY Vendor.VendorId,Vendor.VendorCompany,VendorPayment.[Year]`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const vendorEarningForFacilityInYear = async (id, facility, year) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,sum(VendorPayment.Amount)as Amount,VendorPayment.[Year] FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorPayment ON
    VendorName.VendorId = VendorPayment.VendorId
    where Vendor.EndDate Is NULL and VendorPayment.[Year] = ${year} and Vendor.VendorId=${id} and Facilities.FacilityName = '${facility}'
    GROUP BY Vendor.VendorId,Vendor.VendorCompany,VendorPayment.[Year]`;
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
