const heading = document.createElement('h2');
heading.setAttribute('class', 'heading');
heading.style.textAlign = 'centre';
const ul = document.createElement('ul');
ul.setAttribute('class', 'list');
const form = document.createElement('form');
form.setAttribute('method', 'POST');
form.setAttribute('action', 'http://localhost:3000/temp');
form.setAttribute('id', 'addEmployeeForm');
const addListElement = (type, labelName, placeholder, required) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const div = document.createElement('div');
    label.setAttribute('for', `${labelName}`);
    label.textContent = `${labelName}`;
    const input = document.createElement('input');
    input.setAttribute('id', `${labelName}`);
    input.setAttribute('type', `${type}`);
    input.name = labelName;
    if (required === 1) input.required = true;
    input.style.marginTop = '4px';
    input.setAttribute('placeholder', `${placeholder}`);
    li.appendChild(label);
    li.appendChild(div);
    li.appendChild(input);
    ul.appendChild(li);
    li.style.marginTop = '20px';
};
const addSelectElement = (labelName, n, value, textContent, required) => {
    const li = document.createElement('li');
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
        console.log('hello');
        select.required = true;
    }
    li.appendChild(label);
    li.appendChild(select);
    label.innerHTML = `${labelName}`;
    select.style.marginLeft = '10px';
    ul.appendChild(li);
    li.style.marginTop = '20px';
};

heading.innerHTML = 'Add Employee Details';
document.body.appendChild(heading);
form.appendChild(ul);
ul.style.paddingLeft = '0px';
addListElement('text', 'FirstName', 'Your First Name', 1);
addListElement('text', 'MiddleName', 'Your Middle Name', 0);
addListElement('text', 'LastName', 'Your Last Name', 0);
addSelectElement('Title', 3, ['', 'Mr', 'Ms'], ['--Select--', 'Mr', 'Ms'], 1);
addSelectElement('Gender', 4, ['', 'M', 'F', 'O'], ['--Select--', 'Male', 'Female', 'Others'], 1);
addListElement('Email', 'Email', 'Your Email Address', 1);
addListElement('date', 'Joining Date', '', 1);
addListElement('date', 'Leaving Date', '', 0);
addSelectElement('Billable', 3, ['', 0, 1], ['--Select--', 0, 1], 1);
addSelectElement('Status', 5, ['', 'Pending', 'Active', 'Terminated', 'On bench'], ['--Select--', 'Pending', 'Active', 'Terminated', 'On bench'], 1);
const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');
form.appendChild(submit);
document.body.appendChild(form);
