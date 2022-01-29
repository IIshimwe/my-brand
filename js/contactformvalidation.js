
const nameInput = document.querySelector("#contact-name-input");
const emailInput = document.querySelector("#contact-email-input");
const messageInput = document.querySelector("#contact-message-input");
const contactForm = document.getElementById("contact__form");
const thankYouMessage = document.getElementById("thank-you-msg");

const allInputs = [nameInput, emailInput];
let isFormValid = false;
let isValidationOn = false;

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    if (!isValidationOn) return;
    isFormValid = true;
    nameInput.classList.remove("invalid");
    nameInput.nextElementSibling.classList.add("hide-error-txt");

    if (!nameInput.value) {
        nameInput.classList.add("invalid");
        nameInput.nextElementSibling.classList.remove("hide-error-txt");
        isFormValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add("invalid");
        emailInput.nextElementSibling.classList.remove("hide-error-txt");
        isFormValid = false;
    }
}

nameInput.addEventListener('input', () => {
    validateInputs();
});

emailInput.addEventListener('input', () => {
    validateInputs();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    thankYouMessage.classList.add("hide-error-txt");

    if (isFormValid) {
        contactForm.remove();
        thankYouMessage.classList.remove("hide-error-txt");
    }
});

// // Send message
// let messages = {};
// const messageHandler = (error) => {
//     if (error)
//         console.log(error);
//     console.log('Request handled successfully');
// };

// (function () {
//     function createMessage() {
//         const path = `Queries/`;
//         const name = nameInput.value;
//         const email = emailInput.value;
//         const msg = messageInput.value;

//         if (name !== "" && email !== "" && msg !== "") {
//             const createQuery =
//             {
//                 name,
//                 email,
//                 msg
//             };
//             app_firebase.databaseAPI.create(path, createQuery, messageHandler);
//         }
//     }
//     messages.Create = createMessage;
// })();