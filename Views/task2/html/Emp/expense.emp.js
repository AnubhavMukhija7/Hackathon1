const divEl = document.querySelector('.results'),
    tableEl = document.createElement('table'),
    inputEl = document.createElement('input'),
    paraEl = document.createElement('p'),
    labelEl = document.createElement('label'),
    submitEl = document.createElement('button');
labelEl.textContent = 'Filter by Employee:';
inputEl.type = 'text';
inputEl.placeholder = 'Enter Employee ID';
inputEl.name = 'EmpID';
submitEl.textContent = 'GO!';
divEl.appendChild(tableEl);
divEl.appendChild(paraEl);
divEl.appendChild(labelEl);
divEl.appendChild(inputEl);
divEl.appendChild(submitEl);

const getData = async (eID) => {
    tableEl.innerHTML = '';
    paraEl.innerHTML = `Expenses for EmployeeID: ${eID}`;
    const response = await fetch(`http://localhost:3000/benefit/employee/${eID}/expense`);
    if (response.ok) {
        let data = await response.json();
        if (data.length === 1 && Object.values(data[0])[0] === null) {
            return (tableEl.innerHTML = '<b>Data does not present!</b>');
        }
        if (!data.length) {
            return (tableEl.innerHTML = '<b>Data does not present!</b>');
        }
        populateTable(data);
    } else {
        return console.log('HTTP-Error: ' + response.status);
    }
};

const createTableHeading = (keys) => {
    const header = tableEl.createTHead();
    const row = header.insertRow(0);
    let len = 0;
    for (const item of keys) {
        const cell1 = row.insertCell(len);
        len += 1;
        cell1.innerHTML = `<b>${item}</b>`;
    }
    tableEl.appendChild(row);
};

const populateTable = (Data) => {
    createTableHeading(Object.keys(Data[0]));
    Data.forEach((data) => {
        const row = tableEl.insertRow(0);
        let len = 0;
        for (const value of Object.values(data)) {
            const cell = row.insertCell(len);
            len++;
            cell.innerHTML = value;
        }
        tableEl.appendChild(row);
    });
};

submitEl.addEventListener('click', () => {
    getData(inputEl.value);
});

getData(2);
