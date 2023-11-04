import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLmNvlC-u86lVLM_IYgtPbb3Vt36HtID4",
  authDomain: "househelp-ce807.firebaseapp.com",
  databaseURL: "https://househelp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "househelp",
  storageBucket: "househelp.appspot.com",
  messagingSenderId: "329158691938",
  appId: "1:329158691938:web:dba0cd57768b417461953b",
  measurementId: "G-4M2CCWESP1",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
