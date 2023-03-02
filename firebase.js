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
  apiKey: "AIzaSyD0eznFGBlOd0bsjelqadS_TiB5PxvW44A",
  authDomain: "easy-doc-v1.firebaseapp.com",
  projectId: "easy-doc-v1",
  storageBucket: "easy-doc-v1.appspot.com",
  messagingSenderId: "591372472935",
  appId: "1:591372472935:web:697eec5a6cd648b027bac2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
export const db = getFirestore(app)