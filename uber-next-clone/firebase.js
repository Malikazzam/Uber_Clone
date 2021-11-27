// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu9HbJtL8qeL-TikLNWPHCGawhLO8LkhI",
  authDomain: "clone-45de7.firebaseapp.com",
  projectId: "clone-45de7",
  storageBucket: "clone-45de7.appspot.com",
  messagingSenderId: "157408359527",
  appId: "1:157408359527:web:9d0a3649e3487bdf5c50c2",
  measurementId: "G-HT3QNG0470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider , auth}