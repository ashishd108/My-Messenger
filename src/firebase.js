import firebase from "firebase"
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyDCpoRdXiveI-yycZ20vjGWFwvsuGDG9Pg",
    authDomain: "messenger-ab197.firebaseapp.com",
    databaseURL: "https://messenger-ab197.firebaseio.com",
    projectId: "messenger-ab197",
    storageBucket: "messenger-ab197.appspot.com",
    messagingSenderId: "112763284591",
    appId: "1:112763284591:web:78f0cb0b6b3f075c55719a",
    measurementId: "G-4CEVDSKWX0"
});

    const db =firebaseApp.firestore()
    export default db