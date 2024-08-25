// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVK_kusFKkMPAw8IzaY8zRf2FQnbOIa0I",
  authDomain: "edtrade-1de8a.firebaseapp.com",
  projectId: "edtrade-1de8a",
  storageBucket: "edtrade-1de8a.appspot.com",
  messagingSenderId: "499522483444",
  appId: "1:499522483444:web:9285417e64efc91d981aa1",
  measurementId: "G-CNWWYWVWHK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);