import { deleteVendorDetails } from '../4Service/vendor_service.js';
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

const addFacilityAddVendor = async (object) => {
    console.log(object);
    const insertIntoFacilities = `Insert into Facilities(FacilityName,FacilityDescription,IsActive,FacilityType)
                            Values('${object.FacilityName}','${object.FacilityDescription}',1,'${object.FacilityType}')`;
    (await request.query(insertIntoFacilities));
    const newFacilityId = (await request.query(`Select * from Facilities`)).recordsets[0].length;
    const insertIntoVendor = `Insert into Vendor(VendorCompany,FacilityId,StartDate,EndDate,IsActive)
                              Values('${object.VendorCompany}',${newFacilityId},'${object.StartDate}',null,1)`;
    (await request.query(insertIntoVendor));
    const newVendorId = (await request.query(`Select * from Vendor`)).recordsets[0].length;
    const insertIntoVendorName = `Insert into VendorName(VendorId,Title,FirstName,MiddleName,LastName)
                            Values(${newVendorId},'${object.Title}','${object.FirstName}','${object.MiddleName}','${object.LastName}')`;
    await request.query(insertIntoVendorName);
    const insertIntoVendorMobile = `Insert Into VendorMobile(VendorId,PrimaryMobile,LandLine,AlternateMobile)
                            Values(${newVendorId},${object.PrimaryMobile},${object.LandLine},${object.AlternateMobile})`;
    await request.query(insertIntoVendorMobile);
    const insertIntoVendorAddress = `Insert into VendorAddress(VendorId,StreetAddress1,StreetAddress2,City,District,PostalCode,State,Country)
                            Values(${newVendorId},'${object.StreetAddress1}','${object.StreetAddress2}','${object.City}','${object.District}',${object.PostalCode},'${object.State}','${object.Country}')`;
    await request.query(insertIntoVendorAddress);
    const insertIntoVendorBankDetails = `Insert into VendorBankDetails(VendorId,BankName,AccountNumber,IFSC,BranchName,PAN)
                                        Values(${newVendorId},'${object.BankName}',${object.AccountNumber},'${object.IFSC}','${object.BranchName}','${object.PAN}')`;
    await request.query(insertIntoVendorBankDetails);
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


const addVendor = async(object) => {
    const getFacilityIdForFacilityName = `Select FacilityId From Facilities
                                        where FacilityName = '${object.FacilityName}'`;
    const newFacilityId = ((await request.query(getFacilityIdForFacilityName)).recordset[0]['FacilityId']);
    const insertIntoVendor = `Insert into Vendor(VendorCompany,FacilityId,StartDate,EndDate,IsActive)
                              Values('${object.VendorCompany}',${newFacilityId},'${object.StartDate}',null,1)`;
    (await request.query(insertIntoVendor));
    const newVendorId = (await request.query(`Select * from Vendor`)).recordsets[0].length;
    const insertIntoVendorName = `Insert into VendorName(VendorId,Title,FirstName,MiddleName,LastName)
                            Values(${newVendorId},'${object.Title}','${object.FirstName}','${object.MiddleName}','${object.LastName}')`;
    await request.query(insertIntoVendorName);
    const insertIntoVendorMobile = `Insert Into VendorMobile(VendorId,PrimaryMobile,LandLine,AlternateMobile)
                            Values(${newVendorId},${object.PrimaryMobile},${object.LandLine},${object.AlternateMobile})`;
    await request.query(insertIntoVendorMobile);
    const insertIntoVendorAddress = `Insert into VendorAddress(VendorId,StreetAddress1,StreetAddress2,City,District,PostalCode,State,Country)
                            Values(${newVendorId},'${object.StreetAddress1}','${object.StreetAddress2}','${object.City}','${object.District}',${object.PostalCode},'${object.State}','${object.Country}')`;
    await request.query(insertIntoVendorAddress);
    const insertIntoVendorBankDetails = `Insert into VendorBankDetails(VendorId,BankName,AccountNumber,IFSC,BranchName,PAN)
                                        Values(${newVendorId},'${object.BankName}',${object.AccountNumber},'${object.IFSC}','${object.BranchName}','${object.PAN}')`;
    await request.query(insertIntoVendorBankDetails);
    return 'Record Inserted';
}

const deleteVendor = async (id) => {
    const query = `Update Vendor
                    set isActive=0
                    where VendorId=${id}`;
    await request.query(query);
    return `record deleted`;
};

const deleteFacility = async (body) => {
    const query = ``;
    await request.query(query);
    return 'Facility Deleted';
};

export {
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
    addVendorFacility,
    updateVendorFacility,
    deleteFacility,
    addVendor
};
