const options = document.querySelector('#options');

const Employee = {
  Anubhav: 'https://www.w3schools.com/',
  Aakash: 'https://www.google.com/',
  Vishakha: 'https://www.facebook.com/',
  Dhiren: 'https://www.instagram.com/',
};

const Facilities = {
  a: 'https://www.amazon.com/',
  b: 'https://www.flipkart.com/',
};

const Vendors = {
  c: 'https://www.stackoverflow.com/',
  b: 'https://www.geeksforgeeks.org',
};

const Expense = {
  hi: 'https://www.stackoverflow.com/',
  bye: 'https://www.geeksforgeeks.org',
};

const title = ['Employee', 'Facilities', 'Vendors', 'Expense Summary'];
const emp = [Employee, Facilities, Vendors, Expense];

const generateDOMList = (emp) => {
  for (const key in emp) {
    const noteEl = document.createElement('LI');
    const textEl = document.createElement('a');
    textEl.textContent = key;
    textEl.setAttribute('href', emp[key]);
    noteEl.appendChild(textEl);
    options.appendChild(noteEl);
  }
};

const generateDOMTitle = (title) => {
  let count = 0;
  for (const t of title) {
    const para = document.createElement('p');
    para.innerHTML = t;
    options.appendChild(para);
    generateDOMList(emp[count]);
    count++;
  }
};

generateDOMTitle(title);
