const functionalities = document.querySelector('#functionality');
const buttons = ['View Employee', 'Add Employee', 'Update Employee Details', 'Expenses for Employee'];

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

const showData = async () => {
    location.href = 'view.emp.html';
};

const showExpense = async () => {
    location.href = 'expense.emp.html';
};

const addEmp = async () => {
    location.href = 'add.emp.html';
};

const updateEmp = async () => {
    location.href = 'update.emp.html';
};

const addFunctionality = () => {
    const viewEl = document.querySelector('.View');
    viewEl.addEventListener('click', showData);

    const expenseEl = document.querySelector('.Expenses');
    expenseEl.addEventListener('click', showExpense);

    const addEl = document.querySelector('.Add');
    addEl.addEventListener('click', addEmp);

    const updateEl = document.querySelector('.Update');
    updateEl.addEventListener('click', updateEmp);
};

createButtons();
addFunctionality();
