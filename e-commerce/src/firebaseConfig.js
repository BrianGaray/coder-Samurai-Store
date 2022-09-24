import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEo4jkkzaoQD7WDkQRXVZ4iMBS1_S0Fms",
  authDomain: "react-coder-962e2.firebaseapp.com",
  projectId: "react-coder-962e2",
  storageBucket: "react-coder-962e2.appspot.com",
  messagingSenderId: "715709545321",
  appId: "1:715709545321:web:9ecfad30a97be6366f5bf8",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
