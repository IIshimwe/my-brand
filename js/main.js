// Navbar toggler button
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

/******************** AUTOMATIC POPUP ON PAGE LOAD ************/

const loginPopup = document.querySelector('.login-popup');
const closeBtn = document.querySelector('.close');
const testBtn = document.querySelector('.signin-popup');

testBtn.addEventListener('click', () => {
    loginPopup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    window.location.replace("index.html");
});

// signinBtn.addEventListener('click', () => {
//     // loginPopup.classList.remove('show');
//     window.location.replace("dashboard.html");
// });


// FORM VALIDATIONS

// Contact form validation
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="emails"]');
const thankYou = document.querySelector('.thank-you-msg');
// Helps loop through and use it on adding event to each input rather than creating eventListener to each input itself
const inputs = [nameInput, emailInput];
let isFormValid = false;
// Prevent auto next input validation
let isValidationOn = false;

// A helper function of adding/removing classes
const resetInput = element => {
    element.classList.remove('invalid');
    element.nextElementSibling.classList.add('hide-error-txt');
};

const invalidateInput = element => {
    element.classList.add('invalid');
    element.nextElementSibling.classList.remove('hide-error-txt');
};

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;
    // At first place remove red border on input as well as red error message
    inputs.forEach(resetInput);

    // Is name input empty
    if (!nameInput.value) {
        // If input is empty add red border to the input and display red error message
        invalidateInput(nameInput);
        isFormValid = false;
    }

    // Is a valid email input empty
    if (!isValidEmail(emailInput.value)) {
        invalidateInput(emailInput);
        isFormValid = false;
    }
};

form.addEventListener('submit', event => {
    isValidationOn = true;
    event.preventDefault();
    validateInputs();
    if (isFormValid) {
        // If form is valid remove it and display thank you message
        form.remove();
        thankYou.classList.remove('hide-error-txt');
    }
});

// If input has a value
inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});

// FIREBASE STUFFS - Connect to database
let mainFunc = {};

(() => {

    // CREATE
    const createContactMsg = () => {
        // Create  a user message/query
        const path = `Inquiry/`;
        const name = userName.value;
        const email = userEmail.value;
        const msg = inquiryMsg.value;

        const createQuery = {
            name,
            email,
            msg
        };

        app_firebase.databaseAPI.create(path, createQuery, errorMessage);

        // Create article
        const articleTitle = document.querySelector('#artile-title');
        const articleImg = document.querySelector('#artile-image');
        const articleBody = document.querySelector('#artile-body');
    };

    // READ
    const readMeth = () => {
        // Read user message/query
        const path = `Inquiry/`;
        const onPass = snapShop => {
            if (snapShop && snapShop.val()) {
                console.log(snapShop.val());
            } else {
                console.log('No data found');
            }
        };

        app_firebase.databaseAPI.read(path, onPass, errorMessage);
    };

    // UPDATE
    const updateMeth = () => {

    };

    // DELETE
    const deleteMeth = () => {

    };

    mainFunc.Create = createContactMsg;
    mainFunc.Read = readMeth;
})();

