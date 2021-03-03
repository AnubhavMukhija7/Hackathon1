import express from 'express';

const router = express.Router();

// get single vendor
router.get('/:id', (req, res) => {
    const result = getVendorController(req.params.id);
    return result;
});

// get all vendors
router.get('/', (req, res) => {
    const result = getAllVendorsController();
    return result;
});

// get all vendors for a particular facility... can add a 'sort' feature
router.get('/:facility', (req, res) => {
    const result = getVendorForFacilityController(req.params.facility);
    return result;
});

// get earnings of all vendors in a particular year
router.get('/earning/:year', (req, res) => {
    const result = getVendorsEarningController(req.params.year);
    return result;
});

// get earnings of all vendors for a particular facility in a particular year
router.get('/earning/:facilityName/:year', (req, res) => {
    const result = getVendorsEarningForFacilityController(req.params.facilityName, req.params.year);
    return result;
});

// get earnings of a particular vendor in a particular year
router.get('/:id/earning/:year', (req, res) => {
    const result = vendorEarningInYearController(req.params.id, req.params.year);
    return result;
});

// get earnings of a particular vendor for a particular facility in a particular year
router.get('/:id/:facility/earning/:year', (req, res) => {
    const result = vendorEarningForFacilityInYearController(req.params.id, req.params.year);
    return result;
});

// add facility for a particular vendor
router.post('/add/facility', (req, res) => {
    const result = addVendorFacilityController(req);
    return result;
});

// add vendor with a facility!
router.post('/add', (req, res) => {
    const result = addVendorController(req);
    return result;
});

// update vendor
router.put('/update', (req, res) => {
    const result = updateVendorController(req);
    return result;
});

// update facility for a particular vendor
router.post('/update/facility', (req, res) => {
    const result = updateVendorFacilityController(req);
    return result;
});

// set inactive, set all facilities of that vendor to inactive
router.delete('/delete', (req, res) => {
    const result = deleteVendorController(req);
    return result;
});

// set inactive
router.delete('/delete/facility', (req, res) => {
    const result = deleteFacilityController(req);
    return result;
});

export default router;
