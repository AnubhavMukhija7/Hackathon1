import express from 'express';
import {
  addData,
  updateEmp,
  deleteEmp,
  findAllEmp,
  findOneEmp,
} from '../3Controller/controller.js';

const router = express.Router();

// get single employee
router.get('/employee/:id', (req, res) => {
  findOneEmp(req, res);
});

// get all employees
router.get('/employees', (req, res) => {
  findAllEmp(req, res);
});

//add record
router.post('/add', (req, res) => {
  addData(req, res);
});

//update employee
router.put('/update', (req, res) => {
  updateEmp(req, res);
});

//delete employee
router.delete('/delete::id', (req, res) => {
  deleteEmp(req, res);
});

export default router;
