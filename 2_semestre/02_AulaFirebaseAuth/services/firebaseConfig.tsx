// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { getReactNativePersistence } = 
    require("firebase/auth") as any; // Vai permitir que seja realizado o getReactNativePersistence mesmo sem tipagem

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGzCCv0L2J0_k1WeBD_3qH3Re3RoC_-z4",
  authDomain: "aula02-fireauth.firebaseapp.com",
  projectId: "aula02-fireauth",
  storageBucket: "aula02-fireauth.firebasestorage.app",
  messagingSenderId: "879950685185",
  appId: "1:879950685185:web:1af20e2265037035bb0c00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence:getReactNativePersistence(AsyncStorage)
});
