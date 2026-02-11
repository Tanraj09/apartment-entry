import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGqZc1FJ8wsNdji8N_vlBBvyg_vJf71hY",
  authDomain: "apt-qr-system.firebaseapp.com",
  projectId: "apt-qr-system",
  storageBucket: "apt-qr-system.firebasestorage.app",
  messagingSenderId: "276382125812",
  appId: "1:276382125812:web:d02e22c3b11b1795db98a1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Enable Offline Mode
enableIndexedDbPersistence(db).catch((err) => {
    console.log("Offline persistence error: ", err.code);
});

export { db, auth };