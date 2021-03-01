import express from 'express';

const router = express.Router();

// All the benefits provided by the company
router.get('/', (req, res) => {});

// All the employees availing a particular benefit in the current year
router.get('/:benefitName/employee', (req, res) => {});

// All the employees availing a particular benefit in the given year
router.get('/:benefitName/:year/employee', (req, res) => {});

// Expense due to benefits for a particular emp
router.get('/employee/:id/expense', (req, res) => {});

// Expense due to a particular benefit for a particular emp
router.get('/employee/:id/expense/:benefitName', (req, res) => {});

// Benefits availed by emp
router.get('/employee/:id', (req, res) => {});

// Expense due to benefits in current year
router.get('/expense', (req, res) => {});

// Expense due to a particular benefit in the current year
router.get('/expense/benefitName=:id', (req, res) => {});

// Expense due to benefits in given year
router.get('/expense/:year', (req, res) => {});

// Expense due to a particular benefit in the given year
router.get('/expense/benefitName=:id/:year', (req, res) => {});

export default router;
