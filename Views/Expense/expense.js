const functionalities = document.querySelector('#functionality');
const buttons = ['Report', 'Expenses'];

const createButtons = () => {
    buttons.forEach(function (item) {
        const button = document.createElement('button');
        const para = document.createElement('p');
        button.innerText = item;
        button.classList += item.split(' ')[0];
        button.value = item;
        functionalities.appendChild(button);
        functionalities.appendChild(para);
    });
};

const showReport = async () => {
    location.href = 'show.expense.html';
};

const showExpenses = async () => {
    location.href = 'report.expense.html';
};

const addFunctionality = () => {
    const reportEl = document.querySelector('.Report');
    reportEl.addEventListener('click', showReport);

    const expenseEl = document.querySelector('.Expenses');
    expenseEl.addEventListener('click', showExpenses);
};

createButtons();
addFunctionality();
