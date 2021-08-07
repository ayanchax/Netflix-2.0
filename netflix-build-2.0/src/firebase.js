// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA_KPnuKBhwlSTXfES3ecvjlN8ZbcbRrQc",
    authDomain: "netflix-2-e8113.firebaseapp.com",
    projectId: "netflix-2-e8113",
    storageBucket: "netflix-2-e8113.appspot.com",
    messagingSenderId: "36329599707",
    appId: "1:36329599707:web:6de8b66bab049e222a12fe",
    measurementId: "G-2D0P9HFP24"
};

// initialize firebase app with the configuration
const firebaseApp = firebase.initializeApp(firebaseConfig);
// connect the app with no sql realtime database called firestore
const db = firebaseApp.firestore();
// set up authentication for firebase
export const auth = firebase.auth();

export default db;