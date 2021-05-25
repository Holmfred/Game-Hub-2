const form = document.querySelector("#contactForm")
const fullName = document.querySelector("#fullName")
const fullNameError = document.querySelector("#fullNameError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const cardNumber = document.querySelector("#cardNumber")
const cardNumberError = document.querySelector("#cardNumberError")
const expirationDate = document.querySelector("#expirationDate")
const expirationDateError = document.querySelector("#expirationDateError")
const address = document.querySelector("#address")
const addressError = document.querySelector("#addressError")
const city = document.querySelector("#city")
const cityError = document.querySelector("#cityError")
const success = document.querySelector(".success")

function validateForm(){
    event.preventDefault()

    if(fullName.value.trim().length > 0){
        fullNameError.style.display = "none";
    }
    else{
        fullNameError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    if(validateCardNumber(cardNumber.value.replace(/\s/g, "")) === true){
        cardNumberError.style.display = "none";
    }
    else{
        cardNumberError.style.display = "block";
    }
    if(expirationDate.value.trim().length === 5){
        expirationDateError.style.display = "none";
    }
    else{
        expirationDateError.style.display = "block";
    }
    if(address.value.trim().length > 0){
        addressError.style.display = "none";
    }
    else{
        addressError.style.display = "block";
    }
    if(city.value.trim().length > 0){
        cityError.style.display = "none";
    }
    else{
        cityError.style.display = "block";
    }
    if(fullName.value.trim().length > 0 && validateEmail(email.value) === true && validateCardNumber(cardNumber.value.replace(/\s/g, "")) === true && expirationDate.value.trim().length === 5 && address.value.trim().length > 0 && city.value.trim().length > 0){
        success.style.display = "block"
        console.log(success)
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


function validateCardNumber(cardNumber) {
    const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    const amexpRegEx = /^(?:3[47][0-9]{13})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    const patternMatches = visaRegEx.test(cardNumber) || mastercardRegEx.test(cardNumber) || amexpRegEx.test(cardNumber) || discovRegEx.test(cardNumber);
    return patternMatches;
}