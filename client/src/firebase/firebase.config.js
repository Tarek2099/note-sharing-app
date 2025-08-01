// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDnJ8SiGry97MtlPMcsIQHNwdmxDZ6pTA",
  authDomain: "note-taking-app-38ae9.firebaseapp.com",
  projectId: "note-taking-app-38ae9",
  storageBucket: "note-taking-app-38ae9.firebasestorage.app",
  messagingSenderId: "773264894716",
  appId: "1:773264894716:web:966503800fc85859558579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;