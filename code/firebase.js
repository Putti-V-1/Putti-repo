// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwEduSavZs-5z3Mbnv8e-NOkpAJc6kjc",
  authDomain: "putti-eeecf.firebaseapp.com",
  projectId: "putti-eeecf",
  storageBucket: "putti-eeecf.appspot.com",
  messagingSenderId: "596856077649",
  appId: "1:596856077649:web:8a439e3e3fbc8451a5e770"
};

// Initialize Firebase
let app;
if(firebase.getApps.length === 0){
    app = initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};