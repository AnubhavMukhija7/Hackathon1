import express from 'express';

import {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addVendorFacilityController,
    addVendorController,
    addFacilityAddVendorController,
    updateVendorController,
    updateVendorFacilityController,
    getActiveVendorAndTheirFacilitiesController,
    deleteVendorController,
    deleteFacilityController,
} from '../3Controller/controller.vendor.js';

const router = express.Router();

// get all vendors for a particular facility... can add a 'sort' feature
router.get('/facility=:facility', async (req, res) => {
    const result = await getVendorForFacilityController(req.params.facility);
    res.send(result);
});

// get single vendor
router.get('/id=:id', async (req, res) => {
    const result = await getVendorController(req.params.id);
    res.send(result);
});

// get all vendors
router.get('/', async (req, res) => {
    const result = await getAllVendorsController();
    res.send(result);
});


//get all active vendors and the facilities they are providing
router.get('/activeVendorAndTheirFacilities',async(req,res)=>{
    const result = await getActiveVendorAndTheirFacilitiesController(req,res);
    res.send(result);
})


// get earnings of all vendors in a particular year
router.get('/earning/:year', async (req, res) => {
    const result = await getVendorsEarningController(req.params.year);
    res.send(result);
});

// get earnings of all vendors for a particular facility in a particular year
router.get('/earning/:facilityName/:year', async (req, res) => {
    const result = await getVendorsEarningForFacilityController(req.params.facilityName, req.params.year);
    res.send(result);
});

// get earnings of a particular vendor in a particular year
router.get('/:id/earning/:year', async (req, res) => {
    const result = await vendorEarningInYearController(req.params.id, req.params.year);
    res.send(result);
});

// get earnings of a particular vendor for a particular facility in a particular year
router.get('/:id/:facility/earning/:year', async (req, res) => {
    const result = await vendorEarningForFacilityInYearController(req.params.id, req.params.facility, req.params.year);
    res.send(result);
});

// // add facility for a particular vendor
// router.post('/add/facility', async (req, res) => {
//     const result = await addVendorFacilityController(req);
//     res.send(result);
// });

// add new facility and a new vendor for that facility
router.post('/addFacilityAddvendor', async (req, res) => {
    const result = await addFacilityAddVendorController(req.body);
    res.send(result);
});

// add new vendor for an old facility
router.post('/addVendor',async(req,res)=>{
    const result = await addVendorController(req.body);
    res.send(result);
})

// update vendor
// router.put('/update', async (req, res) => {
//     const result = await updateVendorController(req);
//     res.send(result);
// });

// // update facility for a particular vendor
// router.post('/update/facility', async (req, res) => {
//     const result = await updateVendorFacilityController(req);
//     res.send(result);
// });


// set inactive for a particular vendor
router.delete('/deleteVendor/id=:id', async (req, res) => {
    const result = await deleteVendorController(req.params.id);
    res.send(result);
});

export default router;
