import './style.css'
import './style/profilepicture.sass'

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATCBez9DlpGHDetixU7haGctyTRdD_IxM",
  authDomain: "creanima-link.firebaseapp.com",
  projectId: "creanima-link",
  storageBucket: "creanima-link.appspot.com",
  messagingSenderId: "341561401033",
  appId: "1:341561401033:web:a40ee00bde76bd96a57718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);