import express from 'express';
import pkg from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import employee from '../2Routes/employee.js';
import vendor from '../2Routes/vendor.js';
import benefits from '../2Routes/benefit.js';
import totalExpense from '../2Routes/totalExpense.js';
import overHead from '../2Routes/overhead.js';

const app = express();
const port = process.env.port || 3000;

const dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(dirname + '/../../FrontEnd/showcase')));

app.use(express.json());
app.use(pkg());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(dirname + '/../../FrontEnd/showcase/index.html'));
});
app.use('/employee', employee);
app.use('/vendor', vendor);
app.use('/benefit', benefits);
app.use('/overhead', overHead);
app.use('/totalExpense', totalExpense);

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`);
});
