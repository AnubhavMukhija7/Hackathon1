import express from 'express';

const router = express.Router();

// get single vendor
router.get('/:id', (req, res) => {});

// get all vendors
router.get('/', (req, res) => {});

// get all vendors for a particular facility... can add a 'sort' feature
router.get('/:facility', (req, res) => {});

// get earnings of all vendors in a particular year
router.get('/earning/:year', (req, res) => {});

// get earnings of all vendors for a particular facility in a particular year
router.get('/earning/facility/:year', (req, res) => {});

// get earnings of a particular vendor in a particular year
router.get('/:id/earning/:year', (req, res) => {});

// get earnings of a particular vendor in a particular year
router.get('/:id/earning/:year', (req, res) => {});

// get earnings of a particular vendor for a particular facility in a particular year
router.get('/:id/:facility/earning/:year', (req, res) => {});

// add facility for a particular vendor
router.post('/add/facility', (req, res) => {});

// add vendor with a facility!
router.post('/add', (req, res) => {});

// update vendor
router.put('/update', (req, res) => {});

// update facility for a particular vendor
router.post('/update/facility', (req, res) => {});

// set inactive, set all facilities of that vendor to inactive
router.delete('/delete', (req, res) => { });

// set inactive
router.delete('/delete/facility', (req, res) => {});

export default router;
