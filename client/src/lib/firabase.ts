// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7LL58s7HCqEiztibTGfUlkvmVJGKbGk4',
  authDomain: 'spuper-d36c2.firebaseapp.com',
  projectId: 'spuper-d36c2',
  storageBucket: 'spuper-d36c2.appspot.com',
  messagingSenderId: '592934006392',
  appId: '1:592934006392:web:97ed9f1990a64ac496c78d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
