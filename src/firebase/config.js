import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2B20y81lDQZvAsjZRTm5JbLUsbgQX82s",
  authDomain: "miniblog-eda9b.firebaseapp.com",
  projectId: "miniblog-eda9b",
  storageBucket: "miniblog-eda9b.appspot.com",
  messagingSenderId: "103183259774",
  appId: "1:103183259774:web:f7e3a820721c2e79d6a02f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
