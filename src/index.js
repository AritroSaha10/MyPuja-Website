import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import ServiceWorkerWrapper from "./components/ServiceWorkerWrapper";
// eslint-disable-next-line no-unused-vars
import analytics from "firebase/analytics";

// Initialize Firebase
let firebaseConfig = {
  apiKey: "AIzaSyBUWl1jc67ougXHlXWSm2gqGGo1DDC2v0I",
  authDomain: "my-puja-production.firebaseapp.com",
  databaseURL: "https://my-puja-production.firebaseio.com",
  projectId: "my-puja-production",
  storageBucket: "my-puja-production.appspot.com",
  messagingSenderId: "482334703721",
  appId: "1:482334703721:web:81510c2380ace78fa262f8",
  measurementId: "G-JTES5JWLBR",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ServiceWorkerWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.register();