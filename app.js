const nameElement = document.querySelector('input');
const h1 = document.querySelector('h1');

nameElement.addEventListener('input',function(evt){
    h1.innerText = `Welcome, ${nameElement.value}`;
    if(nameElement.value == '')
    { h1.innerText = 'Enter Your Username';
    }
})