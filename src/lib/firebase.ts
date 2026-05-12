import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4-shG1489lzsRoLJky5gUTx2On_25U2k",
  authDomain: "wedding-invite-91256.firebaseapp.com",
  projectId: "wedding-invite-91256",
  storageBucket: "wedding-invite-91256.firebasestorage.app",
  messagingSenderId: "949028716770",
  appId: "1:949028716770:web:4001e525255c3c76f5debb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);