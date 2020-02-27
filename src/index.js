import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore")

firebase.initializeApp({
  apiKey: "AIzaSyB-ZHfTCG_7y3HRN9L5dlGn2ozvQc6_p2s",
  authDomain: "im-tutorial-74c59.firebaseapp.com",
  databaseURL: "https://im-tutorial-74c59.firebaseio.com",
  projectId: "im-tutorial-74c59",
  storageBucket: "im-tutorial-74c59.appspot.com",
  messagingSenderId: "696052179669",
  appId: "1:696052179669:web:59bb15798483e26c9db85c",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>


);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
