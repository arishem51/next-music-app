import { FirebaseOptions, initializeApp } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
};

export const initialFirebaseApp = () => initializeApp(firebaseConfig);
