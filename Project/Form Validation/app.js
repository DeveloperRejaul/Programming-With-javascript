
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password1");
const confirmPassword = document.querySelector("#password2");




// creat function
function showError(input, message) {
    const formContorl = input.parentElement;
    formContorl.className = "form-control error";
    const small = formContorl.querySelector("small");
    small.innerText = message;
}
function showSuccesss(input){
    input.parentElement.className = "form-control success"
}

// Email Validation
function isvalidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// add eveent
form.addEventListener("submit", function(e){
    e.preventDefault();
    
    if (userName.value === "") {
        showError(userName, "User name is required")
    }else{
        showSuccesss(userName);
    }

    if (email.value === "") {
        showError(email, "Email is required")
    }else if(!isvalidEmail(email.value)){
        showError(email, "Email is not Valid")
    }else{
        showSuccesss(email);
    }

    if (password.value === "") {
        showError(password, "password is required")
    }else{
        showSuccesss(password);
    }

    if (confirmPassword.value === "" ||  password.value !== confirmPassword.value ) {
        showError(confirmPassword, "Confirm password is required")
    }else{
        showSuccesss(confirmPassword);
    }
})
