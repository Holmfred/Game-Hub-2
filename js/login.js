const form = document.querySelector("#loginForm")
const password = document.querySelector("#password")
const Error = document.querySelector("#passwordError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const success = document.querySelector(".success")

function validateForm(){
    event.preventDefault()

    
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    if(password.value.trim().length > 0){
        passwordError.style.display = "none";
    }
    else{
        passwordError.style.display = "block";
    }
    if(validateEmail(email.value) === true && password.value.trim().length > 0){
        success.style.display = "block"
    }
    else {
        success.style.display = "none"
    }
}


form.addEventListener("submit", validateForm)

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}