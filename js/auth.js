// Holder of exported objects
let authMainFunc = {};
// Signign form inputs
// const ownerEmail = document.querySelector('#login-email').value;
// const ownerPassword = document.querySelector('#login-pwd').value;
// const ownerForm = document.querySelector('#login-form');
// const loginBtn = document.querySelector('#login-btn');
// const email = ownerEmail.value;
// const password = ownerPassword.value;
const signedInPopup = document.querySelector('#signed-in');

(() => {

    // AUTHENTICATION - CREATE USER
    // app_firebase.auth().createUserWithEmailAndPassword(email = 'isaac@gmail.com', password = '123456')
    //     .then((user) => {

    //         user = userCredential.user;
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //         // console.log(error);
    //     });

    // let user = null;
    // const messageHandler = (error) => {
    //     if (error)
    //         console.log(error);
    //     console.log('Request handled successfully');
    // };

    // USER SIGIN IN 
    const signinBtn = document.querySelector('#login-btn');

    signinBtn.addEventListener('click', () => {
        app_firebase.auth().signInWithEmailAndPassword(document.querySelector('#login-email').value, document.querySelector('#login-pwd').value)
            .then((userCredential) => {
                user = userCredential.user.uid;
                // console.log(`This user ${user} has signed in`);
                window.location.replace("dashboard.html");
                signedInPopup.getElementsByClassName.background = '#FF0000';
                signedInPopup.innerText = `You are signed in as ${user}`;
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    });

    // CREATE
    const createBlog = () => {
        // CREATE PATH
        // const path = `User/${user}`;
        // const name = document.querySelector('#name').value;
        // const age = document.querySelector('#age').value;
        // const hobby = document.querySelector('#hobby').value;

        // const dataToBeCreated = {
        //     name,
        //     age,
        //     hobby
        // };

        // app_firebase.databaseAPI.createData(path, dataToBeCreated, messageHandler);
    };

    // READ
    const readBlog = () => {
        // const path = `User/${user}`;
        // const onSuccess = snapShop => {
        //     if (snapShop && snapShop.val()) {
        //         console.log(snapShop.val());
        //     } else {
        //         console.log('No data found');
        //     }
        // };

        // app_firebase.databaseAPI.readData(path, onSuccess, messageHandler);
    };

    // UPDATE
    const updateBlog = () => {
        // const path = `User/${user}`;
        // const dataToBeUpdated = {
        //     hobby: 'Movies'
        // };

        // app_firebase.databaseAPI.updateData(path, dataToBeUpdated, messageHandler);
    };

    // DELETE
    const deleteBlog = () => {
        // const path = `User/${user}`;
        // app_firebase.databaseAPI.deleteData(path, messageHandler);
    };

    // authMainFunc.Create = createBlog;
    // authMainFunc.Read = readBlog;
    // authMainFunc.Update = updateBlog;
    // authMainFunc.Delete = deleteBlog;
})();