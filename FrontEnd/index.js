const options = document.querySelector('#options');

const Employee = {
    'Get all employees who have worked in the company': 'employee/',
    'Get the employee details with the current id': 'employee/id=2',
    'Get all employee for the given year': 'employee/year=2021',
    'Get all the billable employees': 'employee/billable',
    'Get all the non - billable employees': 'employee/nonBillable',
    'Get employee id corresponding to emailId': 'employee/getEmployeeId/emailId=vishakha@gmail.com',
    'Total Compensation of an employee in a year': 'employee/compensation/year=2015/id=4',
    'CTC of a particular employee in a given year': 'employee/ctc/year=2015/id=4',
    'Total overhead of an employee in a given year': 'employee/overhead/year=2021',
};

const Benefits = {
    'All the benefits provided by the company that are currently active': 'benefit/',
    'All the employees availing a particular benefit in the current year': 'benefit/Health Insurance/employee',
    'All the employees availing a particular benefit in the given year': 'benefit/Health Insurance/2021/employee',
    'Expense due to benefits for a particular emp': 'benefit/employee/2/expense',
    'Expense due to a particular benefit for a particular emp': 'benefit/employee/2/expense/Provident Fund',
    'Benefits availed by a particular employee': 'benefit/employee/2',
    'Expenses due to benefits in current year': 'benefit/expense',
    'Expenses due to a particular benefit in the current year': 'benefit/expense/Provident Fund',
    'Expense due to benefits in given year': 'benefit/expense/year=2021',
    'Expense due to a particular benefit in the given year': 'benefit/expense/Provident Fund/2021',
};

const Vendors = {
    'Get all vendors': 'vendor/',
    'Get all vendors for a particular facility': 'vendor/facility=Transport',
    'Get a single vendor': 'vendor/id=7',
    'Get earning of all the vendors in a particular year': 'vendor/earning/2019',
    'Get earnings of all vendors for a particular facility in a particular year': 'vendor/earning/Transport/2018',
    'Get earnings of a particular vendor in a particular year': 'vendor/7/earning/2018',
    'Get earnings of a particular vendor for a particular facility in a particular year': 'vendor/7/Transport/earning/2018',
};

const Expense = {
    'Total expense of all the years': 'totalExpense',
    'Total expense of a particular year': 'totalExpense/2015',
};

const Overhead = {
    'Get all overheads': 'overhead/',
    'Get all overheads with amount for a particular year': 'overhead/year=2021',
    'Get expense of a particular facility for that year': 'overhead/facility=Meals/expense/2020',
    'Get vendors for overhead facility': 'overhead/Internet/vendors/2021',
};

const title = ['Employee', 'Benefits', 'Overhead', 'Vendors', 'Expense Summary'];
const emp = [Employee, Benefits, Overhead, Vendors, Expense];

const generateDOMList = (emp) => {
    for (const key in emp) {
        const noteEl = document.createElement('LI');
        const textEl = document.createElement('a');
        textEl.setAttribute('target', '_blank');
        textEl.style.textDecoration = 'none';
        textEl.textContent = key;
        textEl.setAttribute('href', 'http://localhost:3000/' + emp[key]);
        noteEl.appendChild(textEl);
        options.appendChild(noteEl);
    }
};

const generateDOMTitle = (title) => {
    let count = 0;
    for (const t of title) {
        const para = document.createElement('p');
        para.innerHTML = t;
        options.appendChild(para);
        generateDOMList(emp[count]);
        count++;
    }
};

generateDOMTitle(title);
