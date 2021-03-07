const divEl = document.querySelector('.results'),
    tableEl = document.createElement('table');
divEl.appendChild(tableEl);
const getData = async () => {
    const response = await fetch('http://localhost:3000/employee');
    if (response.ok) {
        let data = await response.json();
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
    console.log('Data:', Data);
    createTableHeading();
    Data.forEach((data) => {
        console.log(data);
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

getData();
