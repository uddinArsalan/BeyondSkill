import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCI5Nn-OvLR7S0xsR7_sxaq8QWqeuesPy0",
    authDomain: "beyondskill-d32f8.firebaseapp.com",
    projectId: "beyondskill-d32f8",
    storageBucket: "beyondskill-d32f8.appspot.com",
    messagingSenderId: "822165696050",
    appId: "1:822165696050:web:b6b694fa1a33c033a3162b",
    measurementId: "G-D44MBFKD7V"
  };

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()
export const provider = new GoogleAuthProvider()



