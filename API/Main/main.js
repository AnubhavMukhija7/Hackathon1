import express from 'express';
import pkg from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import employee from '../Routes/employee.js';
import vendor from '../Routes/vendor.js';
import benefits from '../Routes/benefit.js';
import totalExpense from '../Routes/totalExpense.js';
import overHead from '../Routes/overhead.js';

const app = express();
const port = process.env.PORT || 3000;

const dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(dirname + '/../../Views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(pkg());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(dirname + '/../../Views/home.html'));
});

app.use('/employee', employee);
app.use('/vendor', vendor);
app.use('/benefit', benefits);
app.use('/overhead', overHead);
app.use('/totalExpense', totalExpense);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
