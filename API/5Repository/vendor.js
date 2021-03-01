import { makeConnection } from '../6Connection/connection.js';
const request = await makeConnection();

const getVendors = async () => {
  const data = await request.query('Select * from Vendors');
  return data.recordsets[0];
};

const getVendor = async (id) => {
  const data = await request.query(
    `Select * from Vendors where VendorID = ${id}))`
  );
  return data.recordsets[0];
};

const addVendor = async (body) => {
  const data = await request.query(
    `Insert into Vendors (VendorID,FirstName, LastName, etc) values (${body.VendorID},'${body.FirstName}', '${body.LastName}')`
  );
  return 'Record Inserted';
};

const updateVendor = async (body) => {
  const data = await request.query(
    `Update Vendors set ${body.Column} = '${body.Detail}' where VendorID=${body.VendorID}`
  );
  return 'Record Updated';
};

//------NOT USING RN-------
const deleteVendor = async (body) => {
  // const data = await request.query(
  //   `Delete from Vendors where VendorID=${body.VendorID}`
  // );
  // return 'Record Deleted';
};

export { getVendors, getVendor, addVendor, updateVendor, deleteVendor };
