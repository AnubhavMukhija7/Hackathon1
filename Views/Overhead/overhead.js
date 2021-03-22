const functionalities = document.querySelector('#functionality');
const buttons = ['View Overheads', 'Add Ovherhead', 'Expenses on Overheads'];

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
    location.href = 'view.overhead.html';
};
const showExpense = async () => {
    location.href = 'expense.overhead.html';
};

const addFacility = async () => {
    location.href = '../Benefit/add.benefit.html';
};

const addFunctionality = () => {
    const viewEl = document.querySelector('.View');
    viewEl.addEventListener('click', showData);

    const expenseEl = document.querySelector('.Expenses');
    expenseEl.addEventListener('click', showExpense);
    const addEl = document.querySelector('.Add');
    addEl.addEventListener('click', addFacility);
};

createButtons();
addFunctionality();
