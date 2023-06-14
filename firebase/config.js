import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    FacebookAuthProvider,
    GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSmsc8TRXpoCccPY3Cj9KcJtapo2eB2uQ",
    authDomain: "chat-app-2-7415a.firebaseapp.com",
    projectId: "chat-app-2-7415a",
    storageBucket: "chat-app-2-7415a.appspot.com",
    messagingSenderId: "213231115501",
    appId: "1:213231115501:web:54689d736246af34ee80e4",
    measurementId: "G-6WN67MGKER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const db = getFirestore(app);

export { auth, facebookProvider, db, googleProvider };
