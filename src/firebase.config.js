import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnrcL9mvjeDEgP8MnafGxrvS-fkOQDC9g",
  authDomain: "fir-cc291.firebaseapp.com",
  projectId: "fir-cc291",
  storageBucket: "fir-cc291.appspot.com",
  messagingSenderId: "16284153773",
  appId: "1:16284153773:web:36b15e0eb66963d0e1d324"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
export const imgdb = getStorage(app);