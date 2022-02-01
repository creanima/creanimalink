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
  apiKey: "AIzaSyCp9SY1rvj_mxUomDDUSUZBu5Mlh6EgA9g",
  authDomain: "mofti-link.firebaseapp.com",
  projectId: "mofti-link",
  storageBucket: "mofti-link.appspot.com",
  messagingSenderId: "647114463708",
  appId: "1:647114463708:web:be44275dca55b171519719",
  measurementId: "G-KSG23HCB45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);