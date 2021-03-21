import express from 'express';

import {
    addEmployeeController,
    deleteEmployeeController,
    findAllEmployeeController,
    findOneEmployeeController,
    findAllEmployeeInTheGivenYearController,
    updateEmployeeController,
    findYourEmployeeIdController,
    findAllBillableEmployeeController,
    findAllNonBillableEmployeeController,
    findCompensationOfOneEmployeeInGivenYearController,
    findCtcOfOneEmployeeInTheGivenYearController,
    findOverheadOfOneEmployeeInTheGivenYearController,
    findAllDetailsOfOneEmpoyeeController,
    getExpenseDetailsController,
} from '../Controller/controller.emp.js';

const router = express.Router();
// get an employee with the given id
router.get('/id=:id', async (req, res) => {
    res.send(await findOneEmployeeController(req));
});

// get all employee for the given year
router.get('/year=:year', async (req, res) => {
    res.send(findAllEmployeeInTheGivenYearController(req));
});

// get all employees uptill now
router.get('/', async (req, res) => {
    res.send(await findAllEmployeeController(req));
});

router.get('/allEmployeeDetails/id=:id', async (req, res) => {
    res.send(await findAllDetailsOfOneEmpoyeeController(req));
});

router.get('/billable', async (req, res) => {
    res.send(findAllBillableEmployeeController(req));
});

router.get('/nonBillable', (req, res) => {
    res.send(findAllNonBillableEmployeeController(req));
});

// add record
router.post('/add', async (req, res) => {
    res.send(await addEmployeeController(req));
});

// update bank account of employee
router.post(`/updateEmployee`, async (req, res) => {
    res.send(await updateEmployeeController(req));
});

// delete employee
router.delete('/delete/id=:id', async (req, res) => {
    res.send(await deleteEmployeeController(req));
});
// get you employee id corresponding to emailId
router.get('/getEmployeeId/emailId=:emailId', async (req, res) => {
    res.send(await findYourEmployeeIdController(req));
});

// Total Compensation of an employee in a year
router.get('/compensation/year=:year/id=:id', async (req, res) => {
    res.send(await findCompensationOfOneEmployeeInGivenYearController(req));
});

//CTC of each Employee in a given year
router.get('/ctc/year=:year/id=:id', async (req, res) => {
    res.send(await findCtcOfOneEmployeeInTheGivenYearController(req));
});

// Total overhead of an employee in a given year
router.get('/overhead/year=:year', async (req, res) => {
    res.send(await findOverheadOfOneEmployeeInTheGivenYearController(req));
});

router.get('/expenseDetails/year=:year/profit=:per', async (req, res) => {
    const result = await getExpenseDetailsController(req);
    res.send(result);
});
export default router;
