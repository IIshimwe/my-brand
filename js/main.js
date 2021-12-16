// Navbar toggler button
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

// FORM VALIDATIONS

// Contact form validation
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
    }

    if (userEmail.value.trim() === '') {
        onError(userEmail, 'Email cannot be empty');
    } else {
        if (!validateEmail(userEmail.value.trim())) {
            onError(userEmail, 'Email is not valid');
        } else {
            onSuccess(userEmail);
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

/******************************************************************************************8 */

// FIREBASE STUFFS
let mainFunc = {};

(() => {

    // AUTHENTICATION
    // app_firebase.auth().createUserWithEmailAndPassword(email = 'isaac@gmail.com', password = '_isaac123')
    //     .then((userCredential) => {
    //         // Signed in 
    //         var user = userCredential.user;
    //         // ...
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     });

    const errorMessage = (error) => {
        if (error)
            console.log(error);
        console.log('Request handled successfully');
    };

    // CREATE
    const createMeth = () => {
        const path = `Inquiry/`;
        const name = userName.value;
        const email = userEmail.value;
        const msg = inquiryMsg.value;
        // const allMessages = [];

        const createQuery = {
            name,
            email,
            msg
        };
        // allMessages.push(createQuery);

        app_firebase.databaseAPI.create(path, createQuery, errorMessage);
    };

    // READ
    const readMeth = () => {
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

    mainFunc.Create = createMeth;
    mainFunc.Read = readMeth;
})();


/******************** AUTOMATIC POPUP ON PAGE LOAD ************/

// const loginPopup = document.querySelector('.login-popup');
// const closeBtn = document.querySelector('.close');
// const signinBtn = document.querySelector('.btn-signin');

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         loginPopup.classList.add('show');
//     }, 500);
// });

// closeBtn.addEventListener('click', () => {
//     location.href = "http://127.0.0.1:5500/index.html";
// });

// signinBtn.addEventListener('click', () => {
//     location.href = "http://127.0.0.1:5500/dashboard.html";
//     loginPopup.classList.remove('show');
// });

