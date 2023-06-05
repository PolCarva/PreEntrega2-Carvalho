import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfdHn7KolR8NrWLKKkHhnm297rd9d89gA",
  authDomain: "dropper-proyect.firebaseapp.com",
  projectId: "dropper-proyect",
  storageBucket: "dropper-proyect.appspot.com",
  messagingSenderId: "430974485099",
  appId: "1:430974485099:web:39bd3248f1dc67e31ba72e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

