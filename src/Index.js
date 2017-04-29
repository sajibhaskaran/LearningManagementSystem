import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//import App from './components/app';
import reducers from './reducers/index';
import { signalRStart } from './signalR_start';
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

var store = createStoreWithMiddleware(reducers);

signalRStart(store, 

    ReactDOM.render(
        <Provider store={store}>
            <Routes />
        </Provider>
            , document.querySelector('.root'))
);