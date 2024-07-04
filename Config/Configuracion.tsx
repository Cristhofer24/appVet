// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8cEArNnr7nvmmS97PnYHdMNGGArqtMPo",
  authDomain: "veterinaria-fe610.firebaseapp.com",
  databaseURL: "https://veterinaria-fe610-default-rtdb.firebaseio.com",
  projectId: "veterinaria-fe610",
  storageBucket: "veterinaria-fe610.appspot.com",
  messagingSenderId: "662978033083",
  appId: "1:662978033083:web:da6ee6dc7e24f2a409409e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);