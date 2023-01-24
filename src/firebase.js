import firebase from 'firebase';
import "firebase/storage";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANy1nH0KJ4_znPP6cr9H0gq9H9S3Ujm2Y",
    authDomain: "pursuant-67583.firebaseapp.com",
    projectId: "pursuant-67583",
    storageBucket: "pursuant-67583.appspot.com",
    messagingSenderId: "74585712851",
    appId: "1:74585712851:web:359a6b7cda421b56c7cc26",
    measurementId: "G-6JD2NKF493"
});

const db = firebaseApp.firestore();

export { db };