import { makeConnection } from '../Connection/connection.js';
import { convertToModel } from '../../Model/model.convert.js';
const request = await makeConnection();

const getOverHead = async () => {
    const query = `Select FacilityId, FacilityName, FacilityDescription from Facilities where isActive = '1' and FacilityType = 'O'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getOverHeadWithAmount = async (year) => {
    const query = `Select SUM(FacilityAvailed.Amount) as Amount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityAvailed.[Year] = ${year} AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'O'`;
    const data = await request.query(query);
    if (data.recordset[0].Amount === null) {
        return [];
    }
    return convertToModel(data.recordsets[0]);
};

const getOverHeadForFacility = async (overhead, year) => {
    const query = `Select sum(FacilityAvailed.Amount) as Amount
    from Facilities
    INNER JOIN FacilityAvailed ON
    FacilityAvailed.FacilityId = Facilities.FacilityId
    where FacilityName = '${overhead}' and FacilityAvailed.[Year] = ${year} AND Facilities.IsActive = ${1} AND Facilities.FacilityType = 'O'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getVendorForFacility = async (overhead, year) => {
    const query = `Select Vendor.VendorId,Vendor.IsActive,VendorName.FirstName,VendorName.LastName,VendorMobile.PrimaryMobile,
    VendorAddress.City,VendorAddress.District,Facilities.FacilityId,Facilities.FacilityName
    from Vendor INNER JOIN Facilities ON
    Vendor.FacilityId = Facilities.FacilityId INNER JOIN  VendorName ON
    Vendor.VendorId = VendorName.VendorId INNER JOIN VendorMobile ON
    VendorName.VendorId = VendorMobile.VendorId
    INNER JOIN VendorAddress ON
    VendorMobile.VendorId = VendorAddress.VendorId
    where Facilities.FacilityName='${overhead}'`;
    const data = await request.query(query);
    return convertToModel(data.recordsets[0]);
};

const getAllFacilities = async () => {
    const query = `Select FacilityId, FacilityName from Facilities`;
    const data = await request.query(query);
    return data.recordsets[0];
};

const updateOverhead = async (body) => {
    const query = `UPDATE Facilities
    SET
    IsActive = ${body.IsActive},
    FacilityDescription = '${body.FacilityDescription}'
    where FacilityId=${body.FacilityId}`;
    await request.query(query);
    return 'Record Updated!';
};

export { getOverHead, getOverHeadWithAmount, getOverHeadForFacility, getVendorForFacility, getAllFacilities, updateOverhead };
