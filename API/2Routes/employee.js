import express from 'express';
import { addData, updateEmp, deleteEmp, findAllEmp, findOneEmp } from '../3Controller/controller.js';

const router = express.Router();
// get an employee with the given id
router.get('/id=:id', (req, res) => {
    findOneEmp(req,res);
});

// get all employee for the given year
router.get('/year=:year', (req, res) => {});

// get all employees uptill now
router.get('/', (req, res) => {
    findAllEmp(req,res);
});

router.get('/billable', (req, res) => {});

router.get('/nonBillable', (req, res) => {});

// add record
router.post('/add', (req, res) => {
    addData(req, res);
});

// update employee
router.put('/update', (req, res) => {
    updateEmp(req, res);
});

// delete employee
router.delete('/delete::id', (req, res) => {
    deleteEmp(req, res);
});

export default router;
