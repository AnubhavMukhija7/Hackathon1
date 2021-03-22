import { makeConnection } from '../Connection/connection.js';
import Vendor from '../../Model/model.vendor.js';
import Expense from '../../Model/model.expense.js';
const request = await makeConnection();

const getVendor = async id => {
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

const getVendorForFacility = async facility => {
    const query = `SELECT Vendor.VendorId,Vendor.VendorCompany,
    VendorName.FirstName,VendorMobile.PrimaryMobile FROM
    Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId where Vendor.EndDate Is NULL and Facilities.FacilityName = '${facility}'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getVendorsEarning = async year => {
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
  console.log(object);
    const insertIntoFacilities = `Insert into Facilities(FacilityName,FacilityDescription,IsActive,FacilityType)
                            Values('${object.FacilityName}','${object.FacilityDescription}',1,'${object.FacilityType}')`;
    await request.query(insertIntoFacilities);
    return 'Record Inserted';
};

const updateVendor = async object => {
    console.log(object);
    object = new Map(Object.entries(object));
    object = Array.from(object);
    console.log(object);
    const tablesObjectQuery = `SELECT * FROM information_schema.tables`;
    const tablesObject = await(request.query(tablesObjectQuery));
    console.log('All tables',tablesObject.recordset);
    const tablesArray = [];
    for(let i=0;i<tablesObject.recordset.length;i++){
        if(tablesObject.recordset[i].TABLE_NAME.includes('Vendor')){
            tablesArray.push(tablesObject.recordset[i].TABLE_NAME);
        }
    }
    for(let i=0;i<tablesArray.length;i++){
        for(let j=0;j<object.length-1;j++){
            let updateQuery;
            const checkquery = `SELECT COL_LENGTH ('${tablesArray[i]}','${object[j][0]}')`;
            const checkResult = await(request.query(checkquery));
            const go = checkResult.recordset[0][''];
            if(go>0){
                if(object[j][0]==='IsBillable'||object[j][0]==='PostalCode'||object[j][0]==='IsPermanent'||object[j][0]==='Office'||object[j][0]==='Mobile'||
                object[j][0]==='LandLine'||object[j][0]==='AccountNo'){
                    updateQuery = `UPDATE ${tablesArray[i]} SET ${object[j][0]} = ${object[j][1]} where VendorId = ${object[object.length-1][1]}`;
                }else{
                    updateQuery = `UPDATE ${tablesArray[i]} SET ${object[j][0]} = '${object[j][1]}' where VendorId = ${object[object.length-1][1]}`;
                        if(object[j][0] === 'EndDate'){
                            const update = `UPDATE ${tablesArray[i]} SET IsActive=0 WHERE VendorId=${object[object.length-1][1]}`;
                            await(request.query(update));
                        }
                }
                await (request.query(updateQuery));
            }
        }
    }
};

const getUniques = async () => {
    const query1 = `Select VendorCompany from Vendor`;
    const query2 = `Select PAN from VendorBankDetails`;
    const query3 = `Select AccountNumber from VendorBankDetails`;
    const query4 = `Select PrimaryMobile from VendorMobile`;
    const companyDetails = (await request.query(query1)).recordsets[0];
    const panDetails = (await request.query(query2)).recordsets[0];
    const accDetails = (await request.query(query3)).recordsets[0];
    const officeMobileDetails = (await request.query(query4)).recordsets[0];
    return { companyDetails, panDetails, accDetails, officeMobileDetails };
};

const updateVendorFacility = async body => {
    const query = `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`;
    await request.query(query);
    return 'Record Updated';
};

const addVendor = async object => {
    const insertIntoVendor = `EXEC InsertVendor
    @VendorCompany='${object.VendorCompany}',@FacilityId='${object.FacilityId}',@StartDate='${object.StartDate}',@EndDate='${object.EndDate}',
    @IsActive=1,@Title='${object.Title}',@FirstName='${object.FirstName}',@MiddleName='${object.MiddleName}',@LastName='${object.LastName}',
    @PrimaryMobile='${object.PrimaryMobile}',@AlternateMobile='${object.AlternateMobile}',@LandLine='${object.LandLine}',@StreetAddress1='${object.StreetAddress1}',
    @StreetAddress2='${object.StreetAddress2}',@City='${object.City}',@District='${object.District}',@PostalCode='${object.PostalCode}',@State='${object.State}',
    @Country='${object.Country}',@BankName='${object.BankName}',@AccountNumber='${object.AccountNumber}',@IFSC='${object.IFSC}',@BranchName='${object.BranchName}',@PAN='${object.PAN}'`;
    await request.query(insertIntoVendor);
    return 'Record Inserted!';
};

const deleteVendor = async id => {
    const query = `Update Vendor
                    set isActive=0
                    where VendorId=${id}`;
    await request.query(query);
    return `Record deleted!`;
};

const deleteFacility = async () => {
    const query = ``;
    await request.query(query);
    return 'Facility Deleted';
};

const findAllDetailsOfOneVendor = async id => {
    const query = `Select *
    from Vendor INNER JOIN VendorMobile ON Vendor.VendorId = VendorMobile.VendorId
    INNER JOIN VendorAddress ON Vendor.VendorId = VendorAddress.VendorId
    INNER JOIN VendorBankDetails ON Vendor.VendorId = VendorBankDetails.VendorId
    INNER JOIN VendorName ON Vendor.VendorId = VendorName.VendorId
    WHERE Vendor.VendorId = ${id}`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const convertToModel = data => {
    const result = [];
    for (const item of data) {
        result.push({
            ...new Vendor(item.VendorId, item.VendorCompany, item.FacilityName, item.FirstName, item.PrimaryMobile, item.IsActive),
            ...new Expense(item.Amount)});
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
    findAllDetailsOfOneVendor,
    getUniques
};
