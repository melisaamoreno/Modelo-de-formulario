const email = document.querySelector('#inputEmail1');
const password = document.querySelector('#inputPassword');
const repeatPassword = document.querySelector('#inputRepeatPassword');
const checkbox = document.querySelector('.form-check-input');
const button = document.querySelector('.btn');

let mail, pass, repeatPass

const dataSave = () => {
    let mail = email.value;
    let pass = password.value;
    let repeatPass = repeatPassword.value;
}

const validatePass = () => {
    let correct = document.querySelector('.success');
    let incorrect = document.querySelector('.error');

    if (password.value===repeatPassword.value){
        correct.classList.remove('alert');
        incorrect.classList.add('alert');
        button.removeAttribute('disabled', 'disabled');
    }else{
        incorrect.classList.remove('alert');
        correct.classList.add('alert');
        button.setAttribute('disabled', 'disabled');
    }
}

const validateEmail = () => {
    let mailOk = document.querySelector('.emailOk');
    if (email.value === ""){
        mailOk.style.display="block";
        button.setAttribute('disabled', 'disabled');
        let cartelAlert = document.querySelector('.success');
        cartelAlert.style.display="none"
    } 
}
const emptyPass = () => {
    let passOK = document.querySelector('.errorPass');
    if (password.value === ""){
        passOK.style.display="block";
        button.setAttribute('disabled', 'disabled');
    }
}
const emptyPassRep = () => {
    let passRepOK = document.querySelector('.errorPassRep');
    if (repeatPassword.value === ""){
        passRepOK.style.display="block";
        button.setAttribute('disabled', 'disabled');
    }
}

let checks = () => {
    if (checkbox.checked == false){
        let alert = document.querySelector('.alertCheck');
        alert.style.display="block"
        button.setAttribute('disabled', 'disabled');
    }
}



button.addEventListener('click', (e) =>{
    e.preventDefault();
    dataSave();
    validatePass();
    validateEmail();
    emptyPass();
    emptyPassRep();
    checks();
});
repeatPassword.addEventListener('change', validatePass);
repeatPassword.addEventListener('change', validatePass);