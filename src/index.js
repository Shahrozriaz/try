import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBLYG9fvnuwX_1FmQ7ztwOHZNJWACJEK1s",
    authDomain: "pratice-e4a36.firebaseapp.com",
    databaseURL: "https://pratice-e4a36.firebaseio.com",
    projectId: "pratice-e4a36",
    storageBucket: "pratice-e4a36.appspot.com",
    messagingSenderId: "787551987938"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
