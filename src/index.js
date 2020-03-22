import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import LandingComponent from './landing/landing'
// import App from './app'
import firebase from 'firebase/app';

// const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCUBH3GgCPfMauiVc_KjuarJV2010iYpno",
  authDomain: "chat-app-7cbf3.firebaseapp.com",
  databaseURL: "https://chat-app-7cbf3.firebaseio.com",
  projectId: "chat-app-7cbf3",
  storageBucket: "chat-app-7cbf3.appspot.com",
  messagingSenderId: "447470493415",
  appId: "1:447470493415:web:b24c04add7aa22beb28c42",
  measurementId: "G-GD7J8ZP73S"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route exact path='/' component={LandingComponent}></Route>
      <Route exact path='/login' component={LoginComponent}></Route>
      <Route exact path='/signup' component={SignupComponent}></Route>
      <Route exact path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
