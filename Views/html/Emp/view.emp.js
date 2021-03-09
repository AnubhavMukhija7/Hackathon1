const divEl = document.querySelector('.results'),
    tableEl = document.createElement('table'),
    inputEl = document.createElement('input'),
    paraEl = document.createElement('p'),
    labelEl = document.createElement('label'),
    submitEl = document.createElement('button');
labelEl.textContent = 'Filter Employee by ID:';
inputEl.type = 'text';
inputEl.placeholder = 'Enter the Employee ID';
inputEl.name = 'EmpId';
submitEl.textContent = 'Submit';
divEl.appendChild(tableEl);
divEl.appendChild(paraEl);
divEl.appendChild(labelEl);
divEl.appendChild(inputEl);
divEl.appendChild(submitEl);
const getData = async (param = '') => {
    tableEl.innerHTML = '';
    const response = await fetch('http://localhost:3000/employee' + param);
    if (response.ok) {
        let data = await response.json();
        if (!data.length) {
            return (tableEl.innerHTML = '<b>Data does not present!</b>');
        }
        populateTable(data);
    } else {
        return console.log('HTTP-Error: ' + response.status);
    }
};

const createTableHeading = () => {
    const header = tableEl.createTHead();
    const row = header.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    cell1.innerHTML = '<b>EmployeeID</b>    ';
    cell2.innerHTML = '<b>Title</b>    ';
    cell3.innerHTML = '<b>FirstName</b>    ';
    cell4.innerHTML = '<b>LastName</b>    ';
    cell5.innerHTML = '<b>Email</b>    ';
    cell6.innerHTML = '<b>Office Contact</b>    ';
    cell7.innerHTML = '<b>City</b>';
    tableEl.appendChild(row);
};

const populateTable = (Data) => {
    createTableHeading();
    Data.forEach((data) => {
        const row = tableEl.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        cell1.innerHTML = data.EmployeeID;
        cell2.innerHTML = data.Title;
        cell3.innerHTML = data.FirstName;
        cell4.innerHTML = data.LastName;
        cell5.innerHTML = data.EMail;
        cell6.innerHTML = data.OfficeContact;
        cell7.innerHTML = data.City;
        tableEl.appendChild(row);
    });
};

submitEl.addEventListener('click', () => {
    const param = '/id=' + inputEl.value;

    getData(param);
});

getData();
