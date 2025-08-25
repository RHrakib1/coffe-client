// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm--r-5OrRhq5jzcQEy_NiSepRTDm10cs",
  authDomain: "coffe-j.firebaseapp.com",
  projectId: "coffe-j",
  storageBucket: "coffe-j.firebasestorage.app",
  messagingSenderId: "317747069581",
  appId: "1:317747069581:web:7a639eb75d1ec645e818c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;