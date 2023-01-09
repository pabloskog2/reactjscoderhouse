import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDTKDNmiMv_CRgiaJZuMpTPPFU9dmeOLUQ",
  authDomain: "react-app-1-35a18.firebaseapp.com",
  projectId: "react-app-1-35a18",
  storageBucket: "react-app-1-35a18.appspot.com",
  messagingSenderId: "98484573249",
  appId: "1:98484573249:web:2fc3169f1ba795efafa2c0",
  measurementId: "G-G1SVR74WPB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


