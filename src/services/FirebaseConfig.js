import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyADB6zwSTpNVwLMU8YB6YQKBEZOITa-I6Y",
  authDomain: "react-nocita.firebaseapp.com",
  projectId: "react-nocita",
  storageBucket: "react-nocita.appspot.com",
  messagingSenderId: "1055930716795",
  appId: "1:1055930716795:web:cc8d7f928311f2e90788de"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);