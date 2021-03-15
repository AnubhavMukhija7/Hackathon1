let response, expenseData;
const tableEl = document.querySelector('#table');
const showExpense = async () => {
    response = await fetch('https://fbc.exitest.com/totalExpense');
    if (response.ok) {
        expenseData = await response.json();
        createDOMTable(expenseData);
        addYears(expenseData);
    } else {
        console.log('HTTP-Error: ' + response.status);
    }
};

const filterExpensesOnChosenYear = () => {
    const input = document.getElementById('Year').value;
    expenseData.forEach((data) => {
        if (data.Year === parseInt(input, 10)) {
            const arr = [];
            arr.push(data);
            document.getElementById('table').innerHTML = '';
            createDOMTable(arr);
        }
    });
};

const makeYearsDropDown = (data) => {
    const appendTo = document.getElementById('Year');
    for (const value of data) {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        appendTo.appendChild(option);
    }
};

const addYears = (getData) => {
    const years = [];
    getData.forEach((data) => {
        years.push(data.Year);
    });
    makeYearsDropDown(years);
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

const createDOMTable = (Data) => {
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

showExpense();
