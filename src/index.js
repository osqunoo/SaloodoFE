import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reduxThunk from 'redux-thunk';
import store from "./store";
import config from './config';
import { AUTH_USER } from './constants/action-types';

import { createBrowserHistory } from 'history';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export const browserHistory = createBrowserHistory();
 
const token = localStorage.getItem('token');
const role = localStorage.getItem('role');
const userId = localStorage.getItem('userId');
const userName = localStorage.getItem('userName');
configure({ adapter: new Adapter() });

if (token) {
  let obj={};
  obj.role = role;
  obj.userName = userName;
  if (role === '1') {
    obj.MANAGERID = userId;
  } else {
    obj.BIKERID = userId;
  }
  store.dispatch({ type: AUTH_USER, payload: obj  });
}

const app = (
  <Provider store={store}>
        <BrowserRouter basename={config.basename}>
          <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
