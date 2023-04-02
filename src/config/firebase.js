
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDc08vnm0nnrFJVb3BTC_WQLAKKLGysrKU",
  authDomain: "tiktok---jornada-31ae6.firebaseapp.com",
  projectId: "tiktok---jornada-31ae6",
  storageBucket: "tiktok---jornada-31ae6.appspot.com",
  messagingSenderId: "170512969080",
  appId: "1:170512969080:web:61553d11db454783072c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;