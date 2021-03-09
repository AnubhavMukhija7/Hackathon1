const divEl = document.querySelector('.results'),
    tableEl = document.createElement('table');
divEl.appendChild(tableEl);

const getData = async (param = '') => {
    tableEl.innerHTML = '';
    const response = await fetch('http://localhost:3000/overhead' + param);
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

getData();
