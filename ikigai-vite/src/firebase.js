//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBiB1oZeHOgpaYP8eXnCtvoWJFQXartxFQ",
  authDomain: "ikigai-313c3.firebaseapp.com",
  databaseURL: "https://ikigai-313c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ikigai-313c3",
  storageBucket: "ikigai-313c3.appspot.com",
  messagingSenderId: "511973933580",
  appId: "1:511973933580:web:8e04fa93492716dbb22429",
  measurementId: "G-NLMTZ817Y4",
};

// Initialize Firebase
/*const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
const database = getDatabase(app);

export default database;*/

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export default database;


