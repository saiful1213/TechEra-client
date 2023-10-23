// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuf34SAajE0EEuJOogG1UptBMQNDayo2c",
  authDomain: "techera-2bf61.firebaseapp.com",
  projectId: "techera-2bf61",
  storageBucket: "techera-2bf61.appspot.com",
  messagingSenderId: "660175132048",
  appId: "1:660175132048:web:7f910113dd6856f3918f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;