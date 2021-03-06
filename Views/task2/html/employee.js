const functionalities = document.querySelector('#functionality');
const buttons = ['View Employee', 'Add Employee', 'Update Employee Details'];

buttons.forEach(function (item) {
  const button = document.createElement('button');
  const para = document.createElement('p');
  button.innerText = item;
  button.value = item;
  functionalities.appendChild(button);
  functionalities.appendChild(para);
});
