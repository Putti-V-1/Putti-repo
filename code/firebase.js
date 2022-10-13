// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwEduSavZs-5z3Mbnv8e-NOkpAJc6kjc",
  authDomain: "putti-eeecf.firebaseapp.com",
  databaseURL: 'https://putti-eeecf-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "putti-eeecf",
  storageBucket: "putti-eeecf.appspot.com",
  messagingSenderId: "596856077649",
  appId: "1:596856077649:web:8a439e3e3fbc8451a5e770"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
global.db = getDatabase(app);

export { auth };