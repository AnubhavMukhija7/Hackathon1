const br = document.createElement('br');
const heading = document.createElement('h2');
heading.setAttribute('class', 'heading');
heading.style.textAlign = 'centre';
const form = document.createElement('form');
form.setAttribute('id', 'updateEmployeeForm');
form.setAttribute('method', 'POST');
const addListElement = (type, labelName, value, name, required, readOnly) => {
    if (value === null) {
        value = '';
    }
    const label = document.createElement('label');
    label.setAttribute('for', `${labelName}`);
    label.setAttribute('id', `${labelName}`);
    label.textContent = `${labelName}`;
    const input = document.createElement('input');
    input.setAttribute('id', `${labelName}`);
    input.setAttribute('type', `${type}`);
    if (required === 1) input.required = true;
    input.style.marginTop = '4px';
    input.setAttribute('value', value);
    input.readOnly = readOnly === 1 ? true : false;
    input.addEventListener('change', () => {
        console.log('hi');
        input.setAttribute('name', `${name}`);
        if (name === 'LeavingDate') {
            const Status = document.querySelectorAll('#Status');
            console.log('hip hip');
            for (let i of Status) {
                i.remove();
            }
        }
    });

    console.log('him');
    form.appendChild(label);
    form.appendChild(br.cloneNode());
    form.appendChild(input);
};
const addSelectElement = (labelName, n, value, textContent, name, required) => {
    const label = document.createElement('label');
    const select = document.createElement('select');
    label.setAttribute('id', `${labelName}`);
    select.setAttribute('id', `${labelName}`);
    if (labelName === `Title`) {
        const newValue = [];
        newValue.push(value);
        if (value === 'Mr') {
            newValue.push('Ms');
            newValue.push('Mrs');
        } else if (value === 'Ms') {
            newValue.push('Mr');
            newValue.push('Mrs');
        } else {
            newValue.push('Mr');
            newValue.push('Ms');
        }
        value = newValue;
        textContent = newValue;
    } else if (labelName === `Status`) {
        const newValue = [];
        newValue.push(value);
        if (value === 'Intern') {
            newValue.push('Active');
            newValue.push('On bench');
            newValue.push('Terminated');
        } else if (value === 'Terminated') {
            newValue.push('Active');
            newValue.push('Intern');
            newValue.push('On Bench');
        } else if (value === 'Active') {
            newValue.push('Intern');
            newValue.push('On Bench');
            newValue.push('Terminated');
        } else {
            newValue.push('Active');
            newValue.push('Intern');
            newValue.push('Terminated');
        }
        value = newValue;
        textContent = newValue;
    }
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
    select.addEventListener('change', () => {
        console.log('hi');
        select.setAttribute('name', `${name}`);
    });
    label.innerHTML = `${labelName}`;
    form.appendChild(label);
    form.appendChild(br.cloneNode());
    form.appendChild(select);
    form.appendChild(br.cloneNode());
};
const div = document.createElement('div');
const p = document.createElement('p');
p.innerHTML = 'Enter Your Employee Id :';
p.style.float = 'left';
const input = document.createElement('input');
input.style.margin = '14px';
input.setAttribute('type', 'number');
const submit = document.createElement('button');
submit.type = 'submit';
submit.textContent = 'Submit';
div.appendChild(p);
div.appendChild(input);
div.appendChild(submit);
div.style.margin = '30px';
document.body.appendChild(div);
const getData = async (id) => {
    let data = await fetch(`https://fbc.exitest.com/employee/allEmployeeDetails/id=${id}`);
    data = await data.json();
    return data;
};
const updateEmployeeForm = async (id) => {
    console.log(id);
    heading.innerHTML = 'Update Employee Details';
    document.body.appendChild(heading);
    let data = (await getData(id))[0];
    console.log(data);
    form.setAttribute(`action`, `https://fbc.exitest.com/employee/updateEmployee`);
    addListElement('text', 'First Name', data.FirstName, 'FirstName', 1, 1);
    addListElement('text', 'Middle Name', data.MiddleName, 'MiddleName', 0, 1);
    addListElement('text', 'Last Name', data.LastName, 'LastName', 0, 1);
    addSelectElement('Title', 3, data.Title, [], 'Title', 1);
    addListElement('email', 'Email', data.Email, 'Email', 1, 1);
    addListElement('date', 'Joining Date', data.JoiningDate.slice(0, 10), 'JoiningDate', 1, 1);
    addListElement('date', 'Leaving Date', data.LeavingDate === null ? null : data.LeavingDate.slice(0, 10), 'LeavingDate', 0, 0);
    addSelectElement(
        'Billable',
        2,
        [data.IsBillable, data.IsBillable === 0 ? 1 : 0],
        [data.IsBillable === true ? 'Yes' : 'No', data.IsBillable === false ? 'Yes' : 'No'],
        'isBillable',
        1
    );
    addListElement('text', 'Street Address 1', data.StreetAddress1, 'StreetAddress1', 1, 0);
    addListElement('text', 'Street Address 2', data.StreetAddress2, 'StreetAddress2', 0, 0);
    addListElement('text', 'City', data.City, 'City', 1, 0);
    addListElement('number', 'Postal Code', data.PostalCode, 'PostalCode', 1, 0);
    addListElement('text', 'District', data.District, 'District', 1, 0);
    addListElement('text', 'State', data.State, 'State', 1, 0);
    addListElement('text', 'Country', data.Country, 'Country', 1, 0);
    addSelectElement(
        'Is Address Permanent',
        2,
        [data.IsPermanent, data.IsPermanent === 0 ? 1 : 0],
        [data.IsPermanent === true ? 'Yes' : 'No', data.IsPermanent === false ? 'Yes' : 'No'],
        'IsPermanent',
        1
    );
    addListElement('number', 'Office Number', data.Office, 'Office', 1, 0);
    addListElement('number', 'Mobile Number', data.Mobile, 'Mobile', 1, 0);
    addListElement('number', 'LandLine Number', data.LandLine, 'LandLine', 0, 0);
    addListElement('text', 'Bank Name', data.BankName, 'BankName', 1, 0);
    addListElement('number', 'Account No.', data.AccountNo, 'AccountNo', 1, 0);
    addListElement('text', 'IFSC', data.IFSC, 'IFSC', 1, 0);
    addListElement('text', 'Branch Name', data.BranchName, 'BranchName', 1, 0);
    addListElement('text', 'PAN', data.PAN, 'PAN', 1, 1);
    addSelectElement('Status', 4, data.Status, [], 'Status', 1);
    const input = document.createElement('input');
    input.setAttribute('name', `id`);
    input.setAttribute('value', `${id}`);
    input.style.visibility = 'hidden';
    form.appendChild(input);
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(submit);
    document.body.appendChild(form);
};
submit.addEventListener('click', () => {
    const id = input.value;
    if (id === '') {
        window.alert('Enter the employee id');
    } else {
        div.remove();
        updateEmployeeForm(id);
    }
});
