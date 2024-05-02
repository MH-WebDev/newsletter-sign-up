function validateForm() {
    var emailInput = document.getElementById('email');
    var invalidMsg = document.getElementById('invalid');
    var signupForm = document.getElementById('signup');
    var successPage = document.getElementById('success');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Regex for email address validation
    if (!emailRegex.test(emailInput.value)) {
        invalidMsg.textContent = 'Valid email required';
    } else {
       invalidMsg.textContent = '';
       signupForm.classList.add('hidden', 'lg:hidden');
       successPage.classList.remove('hidden', 'lg:hidden');
    }

    return false; //Prevent form submission
}

function revertForm() {
    var signupForm = document.getElementById('signup');
    var successPage = document.getElementById('success');
    var emailInput = document.getElementById('email');
    var invalidMsg = document.getElementById('invalid');

    emailInput.value = '';
    invalidMsg.textContent = '';
    successPage.classList.add('hidden', 'lg:hidden');
    signupForm.classList.remove('hidden', 'lg:hidden');

    return false;
}

document.getElementById('dismiss').addEventListener('click', revertForm);
