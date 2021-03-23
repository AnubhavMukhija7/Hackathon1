import express from 'express';

import {
    getOverHeadController,
    getOverHeadWithAmountController,
    getOverHeadForFacilityController,
    getVendorForFacilityController,
    getAllFacilitiesController,
    updateOverheadController
} from '../Controller/controller.overhead.js';

const router = express.Router();

// get all overheads
router.get('/', async (req, res) => {
    const result = await getOverHeadController();
    res.send(result);
});

// get all overheads with amount for a particular year
router.get('/year=:year', async (req, res) => {
    const result = await getOverHeadWithAmountController(req.params.year);
    res.send(result);
});

// get expense of a particular facility for that year
router.get('/facility=:facility/expense/:year', async (req, res) => {
    const result = await getOverHeadForFacilityController(req.params.facility, req.params.year);
    res.send(result);
});

// get overhead facility for particular emp.. imp?

// get vendors for overhead facility.. not working yet
router.get('/:facility/vendors/:year', async (req, res) => {
    const result = await getVendorForFacilityController(req.params.facility, req.params.year);
    res.send(result);
});

router.get('/facilities', async (req, res) => {
    const result = await getAllFacilitiesController();
    res.send(result);
});

router.post('/update', async (req, res)=>{
    res.send(await updateOverheadController(req));
});

export default router;
