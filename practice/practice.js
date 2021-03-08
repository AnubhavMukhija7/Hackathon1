const heading = document.createElement('h2');
heading.setAttribute("class","heading");
heading.style.textAlign = 'centre';
const ul = document.createElement('ul');
ul.setAttribute("class","list");
const form = document.createElement('form');
const addListElement = (type,labelName,placeholder,required) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const div = document.createElement('div');
    label.setAttribute("for",`${labelName}`)
    label.textContent =`${labelName}`;
    const input = document.createElement('input');
    input.setAttribute("id",`${labelName}`);
    input.setAttribute("type",`${type}`);
    if(required === 1)
        input.required = true;
    input.style.marginTop = "4px";
    input.setAttribute("placeholder",`${placeholder}`);
    li.appendChild(label);
    li.appendChild(div);
    li.appendChild(input); 
    ul.appendChild(li);
    li.style.marginTop = "20px";
}
const addSelectElement = (labelName,n,value,textContent) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const select = document.createElement('select');
    select.setAttribute("id",`${labelName}`)
    const option = [];
    for(let i=0;i<n;i++){
        option[i] = document.createElement('option');
        option[i].value = value[i];
        option[i].textContent = textContent[i];
        select.appendChild(option[i]);
    }
    li.appendChild(label);
    li.appendChild(select);
    label.innerHTML = `${labelName}`;
    select.style.marginLeft = "10px";
    ul.appendChild(li);
    li.style.marginTop = "20px";
}

heading.innerHTML = 'Add Employee Details'; 
document.body.appendChild(heading);
form.appendChild(ul);
ul.style.paddingLeft = "0px";
addListElement('text','FirstName','Your First Name',1);
addListElement('text','MiddleName','Your Middle Name',0);
addListElement('text','LastName','Your Last Name',0);
addSelectElement('Title',3,['null','Mr','Ms'],['--Select--','Mr','Ms']);
addSelectElement('Gender',4,['null','M','F','O'],['--Select--','Male','Female','Others']);
addListElement('email','email','Your Email Address',1);
addListElement('date','Joining Date','',0);
addListElement('date','Leaving Date','',0)
addSelectElement('Billable',3,['null',0,1],['--Select--',0,1]);
addSelectElement('Status',5,['null','Pending','Active','Terminated','On bench'],['--Select--','Pending','Active','Terminated','On bench']);
const submit = document.createElement('input');
submit.setAttribute("type","submit");
form.appendChild(submit);
document.body.appendChild(form);
submit.addEventListener('click',()=>{
    const FirstName = document.getElementById('FirstName').value;
    const LastName = document.getElementById('LastName').value;
    const email = document.getElementById('email').value;
    const Status = document.getElementById('Status').value;
    console.log('hello');
    console.log(FirstName,LastName,email,Status);
    location.href = "http://localhost:3000/employee" + `/adding/FirstName=${FirstName}/LastName=${LastName}/email=${Status}`;
    document.body.remove(form);
})
