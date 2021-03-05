import express from 'express';

import {
  addEmployeeController,
  deleteEmployeeController,
  findAllEmployeeController,
  findOneEmployeeController,
  findAllEmployeeInTheGivenYearController,
  updateEmployeeBankAccountController,
  findYourEmployeeIdController,
  findAllBillableEmployeeController,
  findAllNonBillableEmployeeController,
  findCompensationOfOneEmployeeInGivenYearController,
  findCtcOfOneEmployeeInTheGivenYearController,
  findOverheadOfOneEmployeeInTheGivenYearController,
} from '../3Controller/controller.emp.js';

const router = express.Router();
// get an employee with the given id
router.get('/id=:id', (req, res) => {
  findOneEmployeeController(req, res);
});

// get all employee for the given year
router.get('/year=:year', (req, res, next) => {
  findAllEmployeeInTheGivenYearController(req, res, next);
});

// get all employees uptill now
router.get('/', (req, res) => {
  findAllEmployeeController(req, res);
});

router.get('/billable', (req, res) => {
  findAllBillableEmployeeController(req, res);
});

router.get('/nonBillable', (req, res) => {
  findAllNonBillableEmployeeController(req, res);
});

// add record
router.post('/add', (req, res) => {
  addEmployeeController(req, res);
});

// update bank account of employee
router.put('/update/bankAccount/id=:id', (req, res) => {
  updateEmployeeBankAccountController(req, res);
});

// delete employee
router.delete('/delete/id=:id', (req, res) => {
  deleteEmployeeController(req, res);
});
// get you employee id corresponding to emailId
router.get('/getEmployeeId/emailId=:emailId', (req, res) => {
  findYourEmployeeIdController(req, res);
});

// Total Compensation of an employee in a year
router.get('/compensation/year=:year/id=:id', (req, res) => {
  findCompensationOfOneEmployeeInGivenYearController(req, res);
});

//CTC of each Employee in a given year
router.get('/ctc/year=:year/id=:id', (req, res) => {
  findCtcOfOneEmployeeInTheGivenYearController(req, res);
});

// Total overhead of an employee in a given year
router.get('/overhead/year=:year', (req, res) => {
  findOverheadOfOneEmployeeInTheGivenYearController(req, res);
});
export default router;
