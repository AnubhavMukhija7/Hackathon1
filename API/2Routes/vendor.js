import express from 'express';
import {
  addVendor,
  updateVendor,
  deleteVendor,
  findAllVendor,
  findOneVendor,
} from '../3Controller/controller.js';

const router = express.Router();

// get single vendor
router.get('/vendor/:id', (req, res) => {
  findOneVendor(req, res);
});

// get all vendors
router.get('/vendors', (req, res) => {
  findAllVendor(req, res);
});

//add record
router.post('/vendor/add', (req, res) => {
  addVendor(req, res);
});

//update employee
router.put('/vendor/update', (req, res) => {
  updateVendor(req, res);
});

//delete employee
router.delete('/vendor/delete::id', (req, res) => {
  deleteVendor(req, res);
});

export default router;
