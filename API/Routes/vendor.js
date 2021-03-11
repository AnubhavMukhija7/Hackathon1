import express from 'express';

import {
    getVendorController,
    getAllVendorsController,
    getVendorForFacilityController,
    getVendorsEarningController,
    getVendorsEarningForFacilityController,
    vendorEarningInYearController,
    vendorEarningForFacilityInYearController,
    addVendorController,
    addFacilityController,
    updateVendorController,
    updateVendorFacilityController,
    findAllDetailsOfOneVendorController
} from '../Controller/controller.vendor.js';

const router = express.Router();

// get all vendors for a particular facility...
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

// add facility!
router.post('/addFacility', async (req, res) => {
    await addFacilityController(req.body);
    if (req.body.Choice === 'YES') {
        res.redirect('http://localhost:3000/Vendor/add.vendor.html');
    }

    res.status(200).send('Facility Added!');
});

router.post('/addVendor', async (req, res) => {
    const result = await addVendorController(req.body);
    res.send(result);
});

// update vendor
router.post('/updateVendor', async (req, res) => {
    const result = await updateVendorController(req);
    res.send(result);
});

// update facility for a particular vendor
router.post('/update/facility', async (req, res) => {
    const result = await updateVendorFacilityController(req);
    res.send(result);
});

router.get('/allVendorDetails/id=:id',async(req,res)=>{
    const result = await findAllDetailsOfOneVendorController(req);
    res.send(result);
})




export default router;
