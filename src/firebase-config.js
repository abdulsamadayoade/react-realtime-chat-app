// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDigNb70G0dnD04v5Gm_pULgUn8Ngo-R6M",
  authDomain: "realtime-chat-app-108d0.firebaseapp.com",
  projectId: "realtime-chat-app-108d0",
  storageBucket: "realtime-chat-app-108d0.appspot.com",
  messagingSenderId: "483714238501",
  appId: "1:483714238501:web:f0b2f0ce6c9e94e8dcd7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();