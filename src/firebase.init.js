// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };
const firebaseConfig = {
    apiKey: "AIzaSyDxdcUT4J-oieoKfdQKNvwGys_qcBaDIkg",
    authDomain: "wheel-manufacturing-ltd.firebaseapp.com",
    projectId: "wheel-manufacturing-ltd",
    storageBucket: "wheel-manufacturing-ltd.appspot.com",
    messagingSenderId: "238440414721",
    appId: "1:238440414721:web:197b5c9bb0492d92e9ca00"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);