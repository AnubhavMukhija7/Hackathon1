const options = document.querySelector('#options');

const Employee = {
  'Get all employees who have worked in the company': 'employee/',
  'Get the employee details with the current id': 'employee/id=:id',
  'Get all employee for the given year': 'employee/year=:year',
  'Get all the billable employees': 'employee/billable',
  'Get all the billable employees': 'employee/billable',
  'Get all the non - billable employees': 'employee/nonBillable',
  'Get employee id corresponding to emailId':
    'employee/getEmployeeId/emailId=:emailId',
  'Total Compensation of an employee in a year':
    'employee/compensation/year=:year/id=:id',
  'CTC of each Employee in a given year': 'employee/ctc/year=:year/id=:id',
  'Total overhead of an employee in a given year':
    'employee/overhead/year=:year',
};

const Benefits = {
  'All the benefits provided by the company that are currently active':
    'benefit/',
  'All the employees availing a particular benefit in the current year':
    'benefit/:benefitName/employee',
  'All the employees availing a particular benefit in the given year':
    'benefit/:benefitName/:year/employee',
  'Expense due to benefits for a particular emp in a particular year':
    'benefit/employee/:id/expense',
  'Expense due to a particular benefit for a particular emp':
    'benefit/employee/:id/expense/:benefitName',
  'Benefits availed by a particular employee': 'benefit/employee/:id',
  'Expenses due to benefits in current year': 'benefit/expense',
  'Expenses due to a particular benefit in the current year':
    'benefit/expense/:benefitName',
  'Expense due to benefits in given year': 'benefit/expense/:year',
  'Expense due to a particular benefit in the given year':
    'benefit/expense/:benefitName/:year',
};

const Vendors = {
  'Get all vendors': 'vendor/',
  'Get all vendors for a particular facility': 'vendor/facility=:facility',
  'Get a single vendor': 'vendor/id=:id',
  'Get earning of all the vendors in a particular year': 'vendor/earning/:year',
  'Get earnings of all vendors for a particular facility in a particular year':
    'vendor/earning/:facilityName/:year',
  'Get earnings of a particular vendor in a particular year':
    'vendor/:id/earning/:year',
  'Get earnings of a particular vendor for a particular facility in a particular year':
    'vendor/:id/:facility/earning/:year',
};

const Expense = {
  'Total expense of all the years': 'totalExpense',
  'Total expense of a particular year': 'totalExpense/2015',
};

const Overhead = {
  'Get all overheads': 'overhead/',
  'Get all overheads with amount for a particular year': 'overhead/year=:year',
  'Get expense of a particular facility for that year':
    'overhead/facility=:facility/expense/:year',
  'Get vendors for overhead facility': 'overhead/:facility/vendors/:year',
};

const title = [
  'Employee',
  'Benefits',
  'Overhead',
  'Vendors',
  'Expense Summary',
];
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
