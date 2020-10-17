import React from 'react';
import ReactDOM from 'react-dom';

//Importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing local css file import after bootstrap to override css properties
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
