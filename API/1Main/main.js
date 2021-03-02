import express from 'express';
import pkg from 'cors';
import employee from '../2Routes/employee.js';
import vendor from '../2Routes/vendor.js';
import benefits from '../2Routes/benefit.js';
import totalCost from '../2Routes/totalCost.js';
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(pkg());

app.get('/', (req, res) => {
    res.send('Welcome to the financial bowling chart');
    console.log('hello');
});
app.use('/employee', employee);
app.use('/vendor', vendor);
app.use('/benefit', benefits);
app.use('/totalCost', totalCost);

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`);
});
