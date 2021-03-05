let response;
let expenseData;

const showExpense= async() =>{
    response = await fetch('http://localhost:3000/totalExpense');
    if (response.ok) {
        expenseData  = await response.json();
        console.log('typeofExpensedata',typeof(expenseData));
        createDOMTable(expenseData);
        addYears(expenseData);
    } else {
        console.log("HTTP-Error: " + response.status);
    }
};

const filterExpensesOnChosenYear = () => {
    const input = document.getElementById("Year").value;
    expenseData.forEach(data => {
        console.log('expenseData:',expenseData);
        console.log('input: ',input);
           if(data.Year === parseInt(input,10)){
            const arr = [];
            arr.push(data);
            document.getElementById('table').innerHTML='';
            createDOMTable(arr);
            //    document.getElementById('table').innerHTML= JSON.stringify(data);
            }
    });
};

const makeYearsDropDown = data =>{
    const appendTo = document.getElementById('Year');
    for (const value of data) {
        const option = document.createElement("option");
        option.value = value;
        option.text = value;
        appendTo.appendChild(option);
    }
};

const addYears = getData => {
    const years = [];
    getData.forEach(data => {
        years.push(data.Year);
    });
    makeYearsDropDown(years);
};

const createTableHeading = () => {
    const table = document.querySelector('#table');
    const header = table.createTHead();
    const row = header.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    cell1.innerHTML = "Year    ";
    cell2.innerHTML = "Revenue    ";
    cell3.innerHTML = "Balance    ";
    cell4.innerHTML = "Financial Statement    ";
    cell5.innerHTML = "Total Overhead    ";
    cell6.innerHTML = "Total Benefit    ";
    cell7.innerHTML = "Total Compensation    ";
    table.appendChild(row);
}

const createDOMTable = getData =>{
    console.log('getData:',getData);
    const table = document.querySelector('#table');
    createTableHeading();
    getData.forEach(data => {
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        cell1.innerHTML = data.Year;
        cell2.innerHTML = data.Revenue;
        cell3.innerHTML = data.Balance;
        cell4.innerHTML = data.financialStatement;
        cell5.innerHTML = data.TotalOverhead;
        cell6.innerHTML = data.TotalBenefit;
        cell7.innerHTML = data.TotalCompensation;
        table.appendChild(row);
        });
};


showExpense();

