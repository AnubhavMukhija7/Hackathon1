import express from 'express';

import {
    getAllBenefitController,
    getTotalExpenseController,
    getTotalExpenseForGivenYearController,
    getEmpsForBenefitController,
    getEmpsForBenefitForGivenYearController,
    benefitExpenseForEmpController,
    benefitAvailedController,
    empExpenseForParticularBenefitController,
    benefitExpenseController,
    benefitExpenseForGivenYearController,
} from '../3Controller/controller.benefits.js';

const router = express.Router();

// All the benefits provided by the company
router.get('/', async (req, res) => {
    const result = await getAllBenefitController();
    res.send(result);
});

// All the employees availing a particular benefit in the current year
router.get('/:benefitName/employee', async (req, res) => {
    const result = await getEmpsForBenefitController(req.params.benefitName);
    res.send(result);
});

// All the employees availing a particular benefit in the given year
router.get('/:benefitName/:year/employee', async (req, res) => {
    const result = await getEmpsForBenefitForGivenYearController(req.params.benefitName, parseInt(req.params.year));
    res.send(result);
});

// Expense due to benefits for a particular emp
router.get('/employee/:id/expense', async (req, res) => {
    const result = await benefitExpenseForEmpController(parseInt(req.params.id));
    res.send(result);
});

// Expense due to a particular benefit for a particular emp
router.get('/employee/:id/expense/:benefitName', async (req, res) => {
    const result = await empExpenseForParticularBenefitController(parseInt(req.params.id), req.params.benefitName);
    res.send(result);
});

// Benefits availed by emp
router.get('/employee/:id', async (req, res) => {
    const result = await benefitAvailedController(parseInt(req.params.id));
    res.send(result);
});

// Expense due to benefits in current year
router.get('/expense', async (req, res) => {
    const result = await getTotalExpenseController();
    res.send(result);
});

// Expense due to benefits in given year
router.get('/expense/year=:year', async (req, res) => {
    const result = await getTotalExpenseForGivenYearController(parseInt(req.params.year));
    res.send(result);
});

// Expense due to a particular benefit in the current year
router.get('/expense/:benefitName', async (req, res) => {
    const result = await benefitExpenseController(req.params.benefitName);
    res.send(result);
});

// Expense due to a particular benefit in the given year
router.get('/expense/:benefitName/:year', async (req, res) => {
    const result = await benefitExpenseForGivenYearController(req.params.benefitName, req.params.year);
    res.send(result);
});

export default router;
