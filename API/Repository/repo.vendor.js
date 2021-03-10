import { makeConnection } from '../Connection/connection.js';
import Vendor from '../../Model/model.vendor.js';
import Expense from '../../Model/model.expense.js';
const request = await makeConnection();

const getVendor = async (id) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,Facilities.FacilityName,
    VendorName.FirstName,VendorMobile.PrimaryMobile,Vendor.IsActive FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId where Vendor.VendorId = ${id}`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getAllVendors = async () => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,Facilities.FacilityName FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getVendorForFacility = async (facility) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,
    VendorName.FirstName,VendorMobile.PrimaryMobile FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId where Vendor.EndDate Is NULL and Facilities.FacilityName = '${facility}'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getVendorsEarning = async (year) => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,sum(VendorPayment.Amount)as Amount,VendorPayment.[Year] FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorPayment ON
    VendorName.VendorId = VendorPayment.VendorId
    where VendorPayment.[Year] = ${year}
    GROUP BY Vendor.VendorId,Vendor.VendorCompany,VendorPayment.[Year]`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
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
    return convertToModel(data.recordsets[0]);
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
    return convertToModel(data.recordsets[0]);
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
    return convertToModel(data.recordsets[0]);
};

const addFacility = async (object) => {
    const insertIntoFacilities = `Insert into Facilities(FacilityName,FacilityDescription,IsActive,FacilityType)
                            Values('${object.FacilityName}','${object.FacilityDescription}',1,'${object.FacilityType}')`;
    await request.query(insertIntoFacilities);
    return 'Record Inserted';
};

const updateVendor = async (body) => {
    console.log('ping me');
    // const query = `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`;
    // await request.query(query);
    // return 'Record Updated';
};

const updateVendorFacility = async (body) => {
    const query = `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`;
    await request.query(query);
    return 'Record Updated';
};

const addVendor = async (object) => {
    const newFacilityId = object.FacilityId;
    const insertIntoVendor = `Insert into Vendor(VendorCompany,FacilityId,StartDate,EndDate,IsActive)
                              Values('${object.VendorCompany}',${newFacilityId},'${object.StartDate}',null,1)`;
    await request.query(insertIntoVendor);
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
    return 'Record Inserted!';
};

const deleteVendor = async (id) => {
    const query = `Update Vendor
                    set isActive=0
                    where VendorId=${id}`;
    await request.query(query);
    return `Record deleted!`;
};

const deleteFacility = async (body) => {
    const query = ``;
    await request.query(query);
    return 'Facility Deleted';
};

const convertToModel = (data) => {
    const result = [];
    for (const item of data) {
        result.push({
            ...new Vendor(item.VendorId, item.VendorCompany, item.FacilityName, item.FirstName, item.PrimaryMobile, item.IsActive),
            ...new Expense(item.Amount),
        });
    }
    return result;
};

export {
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
};
