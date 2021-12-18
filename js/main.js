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
// const signinBtn = document.querySelector('#login-btn');
const testBtn = document.querySelector('.signin-popup');

testBtn.addEventListener('click', () => {
    loginPopup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    window.location.replace("index.html");

    // location.href = "http://127.0.0.1:5500/index.html";
});

// signinBtn.addEventListener('click', () => {
//     // loginPopup.classList.remove('show');
//     window.location.replace("dashboard.html");
// });


// FORM VALIDATIONS

// Contact form validation
// Contact form inputs
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const form = document.getElementById('form');
const inquiryMsg = document.getElementById('message');

const validateInputs = () => {
    // Check if Name is empty
    if (userName.value.trim() === '') {
        onError(userName, 'Name cannot be empty');
    } else {
        onSuccess(userName);
        form.reset();
    }

    if (userEmail.value.trim() === '') {
        onError(userEmail, 'Email cannot be empty');
    } else {
        if (!validateEmail(userEmail.value.trim())) {
            onError(userEmail, 'Email is not valid');
        } else {
            onSuccess(userEmail);
            form.reset();
        }
    }
};


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const onSuccess = (input) => {
    const parentElement = input.parentElement;
    const userNameErrorMsg = parentElement.querySelector('small');
    userNameErrorMsg.style.display = 'none';
    userNameErrorMsg.innerText = '';
    parentElement.classList.remove('error');
    parentElement.classList.add('success');
};

const onError = (input, message) => {
    const parentElement = input.parentElement;
    const userNameErrorMsg = parentElement.querySelector('small');
    userNameErrorMsg.style.display = 'block';
    userNameErrorMsg.innerText = message;
    parentElement.classList.add('error');
    parentElement.classList.remove('success');
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

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

