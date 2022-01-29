import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import SignInFeed from './components/sign-in-feed';
import reportWebVitals from './reportWebVitals';
import SignInButton from './components/sign-in-button';



ReactDOM.render(
React.createElement(SignInFeed, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
