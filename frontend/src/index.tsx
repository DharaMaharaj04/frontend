import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.scss';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
// store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
serviceWorker.unregister();
=======
serviceWorker.unregister();
>>>>>>> 43130dd0c2cb219e59d685dd98747f1ddd682a36
