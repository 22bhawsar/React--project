// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVZ8UpuF1zqvdwyk_fn_eSJl2xowvetWI",
  authDomain: "fir-990e4.firebaseapp.com",
  projectId: "fir-990e4",
  storageBucket: "fir-990e4.appspot.com",
  messagingSenderId: "1008789227355",
  appId: "1:1008789227355:web:9a5d78333d7d40e6c67c7e",
  measurementId: "G-RXRVRS6FCX"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth();
export{app,auth};