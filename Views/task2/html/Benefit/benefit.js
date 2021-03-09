const functionalities = document.querySelector('#functionality');
const buttons = ['View Benfits', 'Add Benefit', 'Update Benefit', 'View Expense'];

const createButtons = () => {
    buttons.forEach(function (item) {
        const button = document.createElement('button');
        const para = document.createElement('p');
        button.innerText = item;
        button.classList += buttons[0].split(' ')[0];
        button.value = item;
        functionalities.appendChild(button);
        functionalities.appendChild(para);
    });
};

const showData = async () => {
    location.href = 'view.benefit.html';
};

const addFunctionality = () => {
    const viewEl = document.querySelector('.View');
    viewEl.addEventListener('click', showData);
};

createButtons();
addFunctionality();
