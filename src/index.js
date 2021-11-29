import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDK2NKZ2ssrerlo_art-XHzPbFrdZcMLk8",
  authDomain: "moonsdemo.firebaseapp.com",
  projectId: "moonsdemo",
  storageBucket: "moonsdemo.appspot.com",
  messagingSenderId: "331434568401",
  appId: "1:331434568401:web:cce1b70673609950c033f0",
  measurementId: "G-N15MR31S8D",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
