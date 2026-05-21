import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBaCayUrBJ_5nWb_VMXK63sonwpmsobb1A",
    authDomain: "restaurant-hackathon-ddb36.firebaseapp.com",
    projectId: "restaurant-hackathon-ddb36",
    storageBucket: "restaurant-hackathon-ddb36.firebasestorage.app",
    messagingSenderId: "896073045446",
    appId: "1:896073045446:web:f5399abd57b3b5229e4ec7"
  };

const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
