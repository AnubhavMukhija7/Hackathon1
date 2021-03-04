const options = document.querySelector('#options');

const Employee = {
  Anubhav: 'https://www.w3schools.com/',
  Aakash: 'https://www.google.com/',
  Vishakha: 'https://www.facebook.com/',
  Dhiren: 'https://www.instagram.com/',
};

const Benefits = {
  'All the benefits provided by the company that are currently active':
    'benefit/',
  'All the employees availing a particular benefit in the current year':
    'benefit/:benefitName/employee',
  'All the employees availing a particular benefit in the given year':
    'benefit/:benefitName/:year/employee',
  'Expense due to benefits for a particular emp in a particular year':
    'benefit/employee/:id/expense,',
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

const Facilities = {
  a: 'https://www.amazon.com/',
  b: 'https://www.flipkart.com/',
};

const Vendors = {
  c: 'https://www.stackoverflow.com/',
  b: 'https://www.geeksforgeeks.org',
};

const Expense = {
  hi: 'https://www.stackoverflow.com/',
  bye: 'https://www.geeksforgeeks.org',
};

const title = [
  'Employee',
  'Benefits',
  'Facilities',
  'Vendors',
  'Expense Summary',
];
const emp = [Employee, Benefits, Facilities, Vendors, Expense];

const generateDOMList = (emp) => {
  for (const key in emp) {
    const noteEl = document.createElement('LI');
    const textEl = document.createElement('a');
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
