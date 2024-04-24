const inputs = document.getElementsByTagName('input');
const submit_button = document.querySelector('.submit-button');
const password = document.querySelector('input[name="password"]');
const cpassword = document.querySelector('input[name="cpassword"]');
const warning_msg = document.querySelector('.warning-msg');

submit_button.addEventListener('click', validateForm);

function validateForm() {
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        element.required = true;
    }

    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        if (element.value == "") {
            warning_msg.textContent = "Please, complete the form";
            warning_msg.style.color = "#eb1026";
            return false;
        } else {
            warning_msg.textContent = "";
        }
    }

    if (checkPassword() == false) return;
    console.log("PASS");
    for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];
        element.value = "";
        element.required = false;
        warning_msg.textContent = "The form has already been sent";
        warning_msg.style.color = "#3ac758";
    }
}

function checkPassword() {
    if (password.value !== cpassword.value) {
        warning_msg.textContent = "Password does not match";
        warning_msg.style.color = "#eb1026";
        cpassword.focus();
        return false;
    } else {
        warning_msg.textContent = "";
        return true;
    }
}