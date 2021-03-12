const formEl = document.querySelector('form');
const divEl = document.querySelector('.results'),
    tableEl = document.createElement('table'),
    paraEl = document.createElement('p');
divEl.appendChild(tableEl);
divEl.appendChild(paraEl);

const getData = async (year = 2021, per = 15) => {
    tableEl.innerHTML = '';
    // paraEl.innerHTML = `Expenses for Year: ${year}`;
    const response = await fetch(`http://localhost:3000/employee/expenseDetails/year=${year}/profit=${per}`);
    if (response.ok) {
        let data = await response.json();
        let newData = [];
        newData.push(data);
        if (!newData.length) {
            return (tableEl.innerHTML = '<b>Data is not present!</b>');
        }
        populateTable(newData);
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

const start = () => {
    const profit = document.getElementById('profit').value;
    const year = document.getElementById('year').value;
    if (profit === '' || year === '') {
        window.alert('Enter complete details!');
    } else {
        getData(year, profit);
    }
};
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', start);
