import express from 'express';

const router = express.Router();

// get all overheads for particular year
router.get('/year=:year', (req, res) => {});

// get expense of a particular facility for that year
router.get('/facility=:facility/expense/:year', (req, res) => {});

// get all overheads for particular year
router.get('/year=:year', (req, res) => {});

export default router;
