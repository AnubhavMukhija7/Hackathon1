let data;
let idArray = [];
let nameArray = [];
const getData = async () => {
    const response = await fetch('http://localhost:3000/overhead/facilities');
    if (response.ok) {
        data = await response.json();
        console.log(Object.keys(data));
    } else {
        return console.log('HTTP-Error: ' + response.status);
    }
};
const createPage = () => {
    const heading = document.createElement('h2');
    heading.setAttribute('class', 'heading');
    heading.style.textAlign = 'centre';
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'list');
    const form = document.createElement('form');
    form.setAttribute('id', 'addVendorForm');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'http://localhost:3000/vendor/addVendor');

    const addListElement = (type, labelName, placeholder, name, required) => {
        const li = document.createElement('div');
        const label = document.createElement('label');
        const div = document.createElement('div');
        label.setAttribute('for', `${labelName}`);
        label.textContent = `${labelName}`;
        const input = document.createElement('input');
        input.setAttribute('id', `${labelName}`);
        input.setAttribute('type', `${type}`);
        input.setAttribute('name', `${name}`);
        if (required === 1) input.required = true;
        input.style.marginTop = '4px';
        input.setAttribute('placeholder', `${placeholder}`);
        li.appendChild(label);
        li.appendChild(div);
        li.appendChild(input);
        ul.appendChild(li);
        li.style.marginTop = '20px';
    };

    const addSelectElement = (labelName, n, value, textContent, name, required) => {
        const li = document.createElement('div');
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
        li.appendChild(label);
        li.appendChild(select);
        label.innerHTML = `${labelName}`;
        select.style.marginLeft = '10px';
        ul.appendChild(li);
        li.style.marginTop = '20px';
    };

    heading.innerHTML = 'Add Vendor Details';
    document.body.appendChild(heading);
    form.appendChild(ul);
    ul.style.paddingLeft = '0px';
    addListElement('text', 'Vendor Company', 'Your Vendor Company Name', 'VendorCompany', 1);
    addListElement('text', 'First Name', 'Your First Name', 'FirstName', 1);
    addListElement('text', 'Middle Name', 'Your Middle Name', 'MiddleName', 0);
    addListElement('text', 'Last Name', 'Your Last Name', 'LastName', 0);
    addSelectElement('Title', 3, ['', 'Mr', 'Ms'], ['--Select--', 'Mr', 'Ms'], 'Title', 1);
    addListElement('date', 'Starting Date', '', 'StartDate', 1);
    addListElement('date', 'Leaving Date', '', 'EndDate', 0);
    addListElement('text', 'Street Address 1', 'Your Street Address1', 'StreetAddress1', 1);
    addListElement('text', 'Street Address 2', 'Your Street Address2', 'StreetAddress2', 0);
    addListElement('text', 'City', 'Your City', 'City', 1);
    addListElement('text', 'Postal Code', 'Your Postal Code', 'PostalCode', 1);
    addListElement('text', 'Distrcit', 'Your District', 'District', 1);
    addListElement('text', 'State', 'Your State', 'State', 1);
    addListElement('text', 'Country', 'Your Country', 'Country', 1);
    addListElement('text', 'Primary Mobile Number', 'Your Mobile Number', 'PrimaryMobile', 1);
    addListElement('text', 'LandLine Number', 'Your LandLine Number', 'LandLine', 0);
    addListElement('text', 'Alternate Mobile Number', 'Your Alternate Mobile Number', 'AlternateMobile', 0);
    addListElement('text', 'Bank Name', 'Your Bank Name', 'BankName', 1);
    addListElement('text', 'Account No.', 'Your Account No.', 'AccountNumber', 1);
    addListElement('text', 'IFSC', 'Your IFSC Code', 'IFSC', 1);
    addListElement('text', 'Branch Name', 'Your Branch Name', 'BranchName', 1);
    addListElement('text', 'PAN', 'Your Pan Number', 'PAN', 1);
    addSelectElement('Facility Name', idArray.length + 1, ['', ...idArray], ['--Select--', ...nameArray], 'FacilityId', 1);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    form.appendChild(submit);
    document.body.appendChild(form);
};
const runner = async () => {
    await getData();
    for (const item of data) {
        idArray.push(item['FacilityId']);
        nameArray.push(item['FacilityName']);
    }
    createPage();
};

runner();
