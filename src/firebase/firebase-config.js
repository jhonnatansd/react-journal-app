import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChg6cHKKWIyITqFVQW5oA54tfg2xPleso",
    authDomain: "react-app-cursos-1660b.firebaseapp.com",
    projectId: "react-app-cursos-1660b",
    storageBucket: "react-app-cursos-1660b.appspot.com",
    messagingSenderId: "353938442954",
    appId: "1:353938442954:web:4fbef473ad4e962d664233"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}