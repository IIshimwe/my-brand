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
    appFirebase.auth().createUserWithEmailAndPassword(email = 'fils@gmail.com', password = '_fils123')
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