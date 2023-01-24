// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
///


import {getDatabase} from "firebase/database";

//////////////
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
////////
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//////////////
const firebaseConfig = {
  apiKey: "AIzaSyB1haCBD8z4gLSOvdQItUzNfXGQUlpBN5s",
  authDomain: "test-e97c9.firebaseapp.com",
  projectId: "test-e97c9",
  storageBucket: "test-e97c9.appspot.com",
  messagingSenderId: "702977236182",
  appId: "1:702977236182:web:e96f3d17d16bba4bbbbd77",
  measurementId: "G-JGQTFGN0SB",
  databaseURL: "https://test-e97c9-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const analytics = getAnalytics(app);

///
export const database = getDatabase(app);