/****
 * Login validation
 */

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const loginForm = document.querySelector('#signin-form');
const adminEmailInput = document.querySelector('input[name="login-email"]');
const adminPasswordInput = document.querySelector('input[name="login-password"]');
const btnLogin = document.querySelector('.btn-login');
const loginInputs = [adminEmailInput, adminPasswordInput];

let isFormValid = false;
let isValidationOn = false;

const resetInput = element => {
    element.classList.remove('invalid');
    element.nextElementSibling.classList.add('hide-error-txt');
};

const invalidateInput = element => {
    element.classList.add('invalid');
    element.nextElementSibling.classList.remove('hide-error-txt');
};

const validateLoginInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;
    loginInputs.forEach(resetInput);

    if (!isValidEmail(adminEmailInput.value)) {
        invalidateInput(adminEmailInput);
        isFormValid = false;
    }

    if (!adminPasswordInput.value) {
        invalidateInput(adminPasswordInput);
        isFormValid = false;
    }


};

// If input has a value
loginInputs.forEach(input => {
    input.addEventListener('input', () => {
        validateLoginInputs();
    });
});

// firebase.auth().createUserWithEmailAndPassword(email = 'isaac@gmail.com', password = 'o0o0o0')
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(`${user} is created`);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

btnLogin.addEventListener('click', e => {
    isValidationOn = true;
    e.preventDefault();
    validateLoginInputs();

    const adminEmailValue = adminEmailInput.value;
    const adminPasswordValue = adminPasswordInput.value;

    firebase.auth().signInWithEmailAndPassword(adminEmailValue, adminPasswordValue)
        .then((userCredential) => {
            // window.location.href = '../dashboard.html';
            window.location.replace("dashboard.html");
            console.log(`This user ${userCredential.user.uid} is signed in`);

        })
        .catch((error) => {
            console.log(error);
        });

});