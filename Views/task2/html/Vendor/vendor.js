const functionalities = document.querySelector('#functionality');
const buttons = ['View Vendors', 'Add Vendor', 'Update Vendor Details'];

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
  location.href = 'view.vendor.html';
};

const addFunctionality = () => {
  const viewEl = document.querySelector('.View');
  viewEl.addEventListener('click', showData);
};

createButtons();
addFunctionality();
