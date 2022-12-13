import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUvPcFiyjWYe92O-ec8d_XUkGlUCrxQ3A",
    authDomain: "cinephile-archive.firebaseapp.com",
    projectId: "cinephile-archive",
    storageBucket: "cinephile-archive.appspot.com",
    messagingSenderId: "160526020873",
    appId: "1:160526020873:web:bde9bef0dd0921a1f6e3d8",
    measurementId: "G-YBHKVZSNNG"
  };

  initializeApp(firebaseConfig);  
  export const db = getFirestore();