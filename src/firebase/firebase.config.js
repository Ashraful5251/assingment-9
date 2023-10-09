// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvLc6fCJw3Y6gkl9wEPWy4T7yAuC4rxLM",
  authDomain: "corporate-events-4ab36.firebaseapp.com",
  projectId: "corporate-events-4ab36",
  storageBucket: "corporate-events-4ab36.appspot.com",
  messagingSenderId: "50784593039",
  appId: "1:50784593039:web:afd587c61a9e3578103cfa",
  measurementId: "G-QB4DJV1KDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = getAuth(app);
export default app
// export default auth;
