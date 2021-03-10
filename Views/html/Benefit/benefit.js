const functionalities = document.querySelector('#functionality');
const buttons = ['View Benfits', 'Add Benefit', 'Update Benefit', 'Expenses due to Benefits'];

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
    location.href = 'view.benefit.html';
};

const showExpense = async () => {
    location.href = 'expense.benefit.html';
};

const addBenefit = async () => {
    location.href = 'add.benefit.html';
};

const addFunctionality = () => {
    const viewEl = document.querySelector('.View');
    viewEl.addEventListener('click', showData);

    const expenseEl = document.querySelector('.Expenses');
    expenseEl.addEventListener('click', showExpense);

    const addEl = document.querySelector('.Add');
    addEl.addEventListener('click', addBenefit);
};

createButtons();
addFunctionality();
