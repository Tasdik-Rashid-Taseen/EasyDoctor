// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';
import { initializeApp } from 'firebase/app'
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDUxhrbGr3o2vZVVeBEih6X5mh4pgicUN4",
  authDomain: "easydoctor-firebase.firebaseapp.com",
  projectId: "easydoctor-firebase",
  storageBucket: "easydoctor-firebase.appspot.com",
  messagingSenderId: "617677809718",
  appId: "1:617677809718:web:cfa0c62387defbf89e9097",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
export const db = getFirestore(app)