// let app_firebase = {};


// (() => {
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//         apiKey: "AIzaSyCnxxUq_j9Sblj3YbwciKdkq5lH417s7kg",
//         authDomain: "my-brand-53555.firebaseapp.com",
//         projectId: "my-brand-53555",
//         storageBucket: "my-brand-53555.appspot.com",
//         messagingSenderId: "450269858536",
//         appId: "1:450269858536:web:7bd50cf0d9c59e1d1a175d",
//         measurementId: "G-JPL67SH209"
//     };

//     // INITIALIZE MY-BRAND APP PROJECT
//     firebase.initializeApp(firebaseConfig);
//     // TO BE ABLE TO USE
//     app_firebase = firebase;

//     // CREATE
//     const createFunc = (path, body, errorMessage) => {
//         if (!path || !body) return;

//         app_firebase.database().ref(path).push(body, errorMessage);
//     };

//     // READ
//     const readFunc = (path, onPass, onFailure) => {
//         if (!path || !onPass || !onFailure) return;
//         app_firebase.database().ref(path).once('value').then(onPass, onFailure);
//     };

//     // UPDATE
//     const updateFunc = (path, body, errorMessage) => {
//         if (!path || !body) return;
//         app_firebase.database().ref(path).update(body, errorMessage);
//     };

//     // DELETE
//     const deleteFunc = (path, errorMessage) => {
//         if (!path) return;
//         app_firebase.database().ref(path).remove(errorMessage);
//     };

//     app_firebase.databaseAPI = {
//         create: createFunc,
//         read: readFunc,
//         update: updateFunc,
//         delete: deleteFunc
//     };
// })();
