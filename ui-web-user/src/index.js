import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

// const app = <React.StrictMode><App /></React.StrictMode>;
const app = <BrowserRouter><App /></BrowserRouter>;
const root = document.getElementById('root');

ReactDOM.render(
  app,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
