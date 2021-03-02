import express from 'express';
import {
    addEmployeeController,
    updateEmployeeController,
    deleteEmployeeController,
    findAllEmployeeController,
    findOneEmployeeController,
    findAllEmployeeInTheGivenYearController,
} from '../3Controller/controller.emp.js';

const router = express.Router();
// get an employee with the given id
router.get('/id=:id', (req, res) => {
    findOneEmployeeController(req, res);
});

// get all employee for the given year
router.get('/year=:year', (req, res) => {
    findAllEmployeeInTheGivenYearController(req, res);
});

// get all employees uptill now
router.get('/', (req, res) => {
    findAllEmployeeController(req, res);
});

router.get('/billable', (req, res) => {});

router.get('/nonBillable', (req, res) => {});

// add record
router.post('/add', (req, res) => {
    addEmployeeController(req, res);
});

// update employee
router.put('/update', (req, res) => {
    updateEmployeeController(req, res);
});

// delete employee
router.delete('/delete::id', (req, res) => {
    deleteEmployeeController(req, res);
});

export default router;
