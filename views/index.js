let bodyEl = document.querySelector('body');
let employeeEl = document.createElement('div'),
    benefitEl = document.createElement('div'),
    vendorEl = document.createElement('div'),
    overHeadEl = document.createElement('div'),
    totalExpenseEl = document.createElement('div');
bodyEl.append(employeeEl, benefitEl, vendorEl, overHeadEl, totalExpenseEl);

employeeEl.classList += 'employee';
benefitEl.classList += 'benefit';
vendorEl.classList += 'vendor';
overHeadEl.classList += 'overHead';
totalExpenseEl.classList += 'totalExpense';

console.log(bodyEl);
