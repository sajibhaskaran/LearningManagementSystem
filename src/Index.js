import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//import App from './components/app';
import reducers from './reducers/index';
import Routes from './routes';
import { signalRStart } from './signalR_start';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

var store = createStoreWithMiddleware(reducers);

signalRStart(store);