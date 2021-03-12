const br = document.createElement('br');
const heading = document.createElement('h2');
heading.setAttribute('class', 'heading');
heading.style.textAlign = 'centre';
const form = document.createElement('form');
form.setAttribute('id', 'addEmployeeForm');
form.setAttribute('method', 'POST');
form.setAttribute('action', 'http://localhost:3000/employee/add');
const addListElement = (type, labelName, placeholder, name, required) => {
    const label = document.createElement('label');
    label.setAttribute('for', `${labelName}`);
    label.textContent = `${labelName}`;
    const input = document.createElement('input');
    input.setAttribute('id', `${labelName}`);
    input.setAttribute('type', `${type}`);
    input.setAttribute('name', `${name}`);
    if (required === 1) input.required = true;
    input.setAttribute('placeholder', `${placeholder}`);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(br.cloneNode());
};
const addSelectElement = (labelName, n, value, textContent, name, required) => {
    const label = document.createElement('label');
    const select = document.createElement('select');
    select.setAttribute('id', `${labelName}`);
    const option = [];
    for (let i = 0; i < n; i++) {
        option[i] = document.createElement('option');
        option[i].value = value[i];
        option[i].textContent = textContent[i];
        select.appendChild(option[i]);
    }
    if (required === 1) {
        select.required = true;
    }
    select.setAttribute('name', name);
    label.innerHTML = `${labelName}`;
    form.appendChild(label);
    form.appendChild(select);
    form.appendChild(br.cloneNode());
};

heading.innerHTML = 'Add Employee Details';
document.body.appendChild(heading);
addListElement('text', 'First Name', 'Your First Name', 'FirstName', 1);
addListElement('text', 'Middle Name', 'Your Middle Name', 'MiddleName', 0);
addListElement('text', 'Last Name', 'Your Last Name', 'LastName', 0);
addSelectElement('Title', 4, ['', 'Mr', 'Ms','Mrs'], ['--Select--', 'Mr', 'Ms','Mrs'], 'Title', 1);
addSelectElement('Gender', 4, ['', 'M', 'F', 'O'], ['--Select--', 'Male', 'Female', 'Others'], 'Gender', 1);
addListElement('email', 'Email', 'Your Email Address', 'Email', 1);
addListElement('date', 'Joining Date', '', 'JoiningDate', 1);
addListElement('date', 'Leaving Date', '', 'LeavingDate', 0);
addSelectElement('Billable', 3, ['', 0, 1], ['--Select--', 'No', 'Yes'], 'isBillable', 1);
addListElement('text', 'Street Address 1', 'Your Street Address1', 'StreetAddress1', 1);
addListElement('text', 'Street Address 2', 'Your Street Address2', 'StreetAddress2', 0);
addListElement('text', 'City', 'Your City', 'City', 1);
addListElement('text', 'Postal Code', 'Your Postal Code', 'PostalCode', 1);
addListElement('text', 'District', 'Your District', 'District', 1);
addListElement('text', 'State', 'Your State', 'State', 1);
addListElement('text', 'Country', 'Your Country', 'Country', 1);
addSelectElement('Is Address Permanent', 3, ['', 1, 0], ['--Select--', 'Yes', 'No'], 'IsPermanent', 1);
addListElement('number', 'Office Number', 'Your Office Number', 'Office', 1);
addListElement('number', 'Mobile Number', 'Your Mobile Number', 'Mobile', 1);
addListElement('number', 'LandLine Number', 'Your LandLine Number', 'LandLine', 0);
addListElement('text', 'Bank Name', 'Your Bank Name', 'BankName', 1);
addListElement('text', 'Account No.', 'Your Account No.', 'AccountNo', 1);
addListElement('text', 'IFSC', 'Your IFSC Code', 'IFSC', 1);
addListElement('text', 'Branch Name', 'Your Branch Name', 'BranchName', 1);
addListElement('text', 'PAN', 'Your Pan Number', 'PAN', 1);
addSelectElement(
    'Status',
    5,
    ['', 'Intern', 'Active', 'Terminated', 'On bench'],
    ['--Select--', 'Intern', 'Active', 'Terminated', 'On bench'],
    'Status',
    1
);
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');
form.appendChild(br.cloneNode());
form.appendChild(submit);
document.body.appendChild(heading);
document.body.appendChild(form);
