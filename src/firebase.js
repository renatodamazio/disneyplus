import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new app.auth.GoogleAuthProvider();
const storage = app.storage();

export { auth, provider, storage };
export default db;
