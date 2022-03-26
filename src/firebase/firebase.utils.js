import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAhdBbc-d5xrCGMp__hPM6Tk8VnQiQbgJA",
    authDomain: "ripper-db.firebaseapp.com",
    projectId: "ripper-db",
    storageBucket: "ripper-db.appspot.com",
    messagingSenderId: "932563607610",
    appId: "1:932563607610:web:50b2f7007133b8b8905503",
    measurementId: "G-2X5390VWSC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;