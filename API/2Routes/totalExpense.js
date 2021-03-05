import express from 'express';
import { totalExpenseController, totalExpenseForYearController } from '../3Controller/contoller.totalExpense.js';
const router = express.Router();

// total expense of current year
router.get('/', async (req, res) => {
    const result = await totalExpenseController();
    res.send(result);
});

// show result of corresponding year...
router.get('/:year', async (req, res) => {
    const result = await totalExpenseForYearController(req.params.year);
    res.send(result);
});

export default router;
