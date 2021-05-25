const form = document.querySelector("#contactForm")
const fullName = document.querySelector("#fullName")
const fullNameError = document.querySelector("#fullNameError")
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const success = document.querySelector(".success")

function validateForm(){
    event.preventDefault()

    if(fullName.value.trim().length > 0){
        fullNameError.style.display = "none";
    }
    else{
        fullNameError.style.display = "block";
    }
    if(subject.value.trim().length >= 40){
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    if(fullName.value.trim().length > 0 && subject.value.trim().length >= 40 && validateEmail(email.value) === true){
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








