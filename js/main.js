const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

// FIREBASE STUFFS
let mainFunc = {};

(() => {

    // AUTHENTICATION
    app_firebase.auth().createUserWithEmailAndPassword(email = 'fils@gmail.com', password = '_fils123')
        .then((user) => {
            // Signed in 
            // var user = userCredential.user;
            // ...
            console.log(user);
        })
        .catch((error) => {
            // let errorCode = error.code;
            // let errorMessage = error.message;
            // console.log(errorCode);
            // console.log(errorMessage);
            console.log(error);
        });

    // CREATE
    const createBlog = () => {

    };

    // READ
    const readBlog = () => {

    };

    // UPDATE
    const updateBlog = () => {

    };

    // DELETE
    const deleteBlog = () => {

    };

})();


/******************** AUTOMATIC POPUP ON PAGE LOAD */

const loginPopup = document.querySelector('.login-popup');
const closeBtn = document.querySelector('.close');
const signinBtn = document.querySelector('.btn-signin');

window.addEventListener('load', () => {
    setTimeout(() => {
        loginPopup.classList.add('show');
    }, 500);
});

closeBtn.addEventListener('click', () => {
    location.href = "http://127.0.0.1:5500/index.html";
});

signinBtn.addEventListener('click', () => {
    loginPopup.classList.remove('show');
    location.href = "http://127.0.0.1:5500/dashboard.html";
});