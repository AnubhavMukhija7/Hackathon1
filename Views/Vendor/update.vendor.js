const heading = document.createElement('h2');
heading.setAttribute('class', 'heading');
heading.style.textAlign = 'centre';
const ul = document.createElement('ul');
ul.setAttribute('class', 'list');
const form = document.createElement('form');
form.setAttribute('id', 'updateVendorForm');
form.setAttribute('method', 'POST');
const addListElement = (type, labelName, value, name, required, readOnly) => {
    if (value === null) {
        value = '';
    }
    const li = document.createElement('li');
    const label = document.createElement('label');
    const div = document.createElement('div');
    label.setAttribute('for', `${labelName}`);
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
    });
    li.appendChild(label);
    li.appendChild(div);
    li.appendChild(input);
    ul.appendChild(li);
    li.style.marginTop = '20px';
};
const addSelectElement = (labelName, n, value, textContent, name, required) => {
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
        select.required = true;
    }
    select.addEventListener('change', () => {
        console.log('hi');
        select.setAttribute('name', `${name}`);
        console.log('him');
    });
    li.appendChild(label);
    li.appendChild(select);
    label.innerHTML = `${labelName}`;
    select.style.marginLeft = '10px';
    ul.appendChild(li);
    li.style.marginTop = '20px';
};
const div = document.createElement('div');
const p = document.createElement('p');
p.innerHTML = 'Enter Your Vendor Id :';
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
    let data = await fetch(`http://localhost:3000/vendor/allVendorDetails/id=${id}`);
    data = await data.json();
    return data;
};
const updateEmployeeForm = async (id) => {
    console.log(id);
    heading.innerHTML = 'Update Vendor Details';
    document.body.appendChild(heading);
    form.appendChild(ul);
    ul.style.paddingLeft = '0px';
    let data = (await getData(id))[0];
    console.log(data);
    form.setAttribute(`action`, `http://localhost:3000/vendor/updateVendor`);
    addListElement('text','Vendor Company',data.VendorCompany,'VendorCompany',1,1);
    addListElement('text', 'First Name', data.FirstName, 'FirstName', 1, 1);
    addListElement('text', 'Middle Name', data.MiddleName, 'MiddleName', 0, 1);
    addListElement('text', 'Last Name', data.LastName, 'LastName', 0, 1);
    addSelectElement('Title', 2, ['Mr', 'Ms'], ['Mr', 'Ms'], 'Title', 1);
    addListElement('date', 'Joining Date', data.StartDate.slice(0, 10), 'StartDate', 0, 1);
    addListElement('date', 'Leaving Date', data.EndDate === null ? null : data.EndDate.slice(0, 10), 'EndDate', 0, 0);
    addListElement('text', 'Street Address 1', data.StreetAddress1, 'StreetAddress1', 1, 0);
    addListElement('text', 'Street Address 2', data.StreetAddress2, 'StreetAddress2', 0, 0);
    addListElement('text', 'City', data.City, 'City', 1, 0);
    addListElement('number', 'Postal Code', data.PostalCode, 'PostalCode', 1, 0);
    addListElement('text', 'District', data.District, 'District', 1, 0);
    addListElement('text', 'State', data.State, 'State', 1, 0);
    addListElement('text', 'Country', data.Country, 'Country', 1, 0);
    addListElement('number', 'Mobile Number', data.PrimaryMobile, 'Mobile', 1, 0);
    addListElement('number', 'LandLine Number', data.LandLine, 'LandLine', 0, 0);
    addListElement('number','Alternate Mobile NUmber',data.AlternateMobie,'AlternateMobile',0,0);
    addListElement('text', 'Bank Name', data.BankName, 'BankName', 1, 0);
    addListElement('number', 'Account No.', data.AccountNumber, 'AccountNumber', 1, 0);
    addListElement('text', 'IFSC', data.IFSC, 'IFSC', 1, 0);
    addListElement('text', 'Branch Name', data.BranchName, 'BranchName', 1, 0);
    addListElement('text', 'PAN', data.PAN, 'PAN', 1, 1);
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
    div.remove();
    updateEmployeeForm(id);
});
