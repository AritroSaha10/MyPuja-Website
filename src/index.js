import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';

// Initialize Firebase
let firebaseConfig = {
  apiKey: "AIzaSyDy358sey0Jf7sfQBQ9FDTeGo0NG16x1eE",
  authDomain: "fir-react-test-4c35e.firebaseapp.com",
  databaseURL: "https://fir-react-test-4c35e.firebaseio.com",
  projectId: "fir-react-test-4c35e",
  storageBucket: "fir-react-test-4c35e.appspot.com",
  messagingSenderId: "515877594561",
  appId: "1:515877594561:web:dd113c4314277181cbfb40",
  measurementId: "G-740M01LQRP"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
