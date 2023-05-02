// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7Drh8utNBy3rSrR5tlNDfhEclysadCW0",
  authDomain: "assignment-10-b8ffa.firebaseapp.com",
  projectId: "assignment-10-b8ffa",
  storageBucket: "assignment-10-b8ffa.appspot.com",
  messagingSenderId: "1024978681110",
  appId: "1:1024978681110:web:6d9ce082766f607b60e437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;