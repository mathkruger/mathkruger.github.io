import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTwV_reQI-UD29vTTpAaKZBjZOGg1KOKo",
  authDomain: "matheus-kruger-dev.firebaseapp.com",
  projectId: "matheus-kruger-dev",
  storageBucket: "matheus-kruger-dev.appspot.com",
  messagingSenderId: "830405095701",
  appId: "1:830405095701:web:0ee65980b820fd8b39391c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;