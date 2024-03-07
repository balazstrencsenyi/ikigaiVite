// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiB1oZeHOgpaYP8eXnCtvoWJFQXartxFQ",
  authDomain: "ikigai-313c3.firebaseapp.com",
  projectId: "ikigai-313c3",
  storageBucket: "ikigai-313c3.appspot.com",
  messagingSenderId: "511973933580",
  appId: "1:511973933580:web:8e04fa93492716dbb22429",
  measurementId: "G-NLMTZ817Y4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);*/
export const analytics = getAnalytics(app);
export const auth = getAuth(app);