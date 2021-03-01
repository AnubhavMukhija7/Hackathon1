import express from 'express';
import pkg from 'cors';
import employee from '../2Routes/employee.js';
import vendor from '../2Routes/vendor.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(pkg());

app.use('/employee', employee);
app.use('/vendors', vendor);

app.listen(port, () => console.log(`I am listining http://localhost:${port}`));
