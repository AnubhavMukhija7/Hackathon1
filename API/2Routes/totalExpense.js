import express from 'express';
import { totalExpenseController, totalExpenseForYearController } from '../3Controller/contoller.totalExpense.js';
const router = express.Router();

// total expense of current year
router.get('/', async (req, res) => {
    const result = await totalExpenseController();
    return result;
});

// show result of corresponding year...
router.get('/:year', (req, res) =>
{
    const result = await totalExpenseForYearController();
    return result;
});

export default router;
