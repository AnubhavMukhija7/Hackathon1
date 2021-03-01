import {
  getVendors,
  getVendor,
  addVendor,
  updateVendor,
  deleteVendor,
} from '../5Repository/vendor.js';

const addVen = async (req, res) => {
  const response = await addVendor(req.body);
  res.send(response);
};

const updateVen = async (req, res) => {
  const response = await updateVendor(req.body);
  res.send(response);
};

const deleteVen = async (req, res) => {
  const response = await deleteVendor(req.body);
  res.send(response);
};

const findAllVen = async (req, res) => {
  const response = await getVendors();
  res.send(response);
};

const findOneVen = async (req, res) => {
  const response = await getVendor(req.params.id);
  res.send(response);
};

export { addVen, updateVen, deleteVen, findAllVen, findOneVen };
