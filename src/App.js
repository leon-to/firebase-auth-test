import React from 'react';
import logo from './logo.svg';
import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

function App() {
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_9IdvLYayUYXUdzi35zbwi943gSVrrCY",
    authDomain: "auth-test-34576.firebaseapp.com",
    databaseURL: "https://auth-test-34576.firebaseio.com",
    projectId: "auth-test-34576",
    storageBucket: "auth-test-34576.appspot.com",
    messagingSenderId: "528510603604",
    appId: "1:528510603604:web:39848fd3ccae862f6c38c1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
