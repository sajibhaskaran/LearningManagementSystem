import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

export function signalRStart(store) {

    // Connect to the hub called Data
    hub = $.connection.Data;

    // Declare all clientside functions here

    // All clientside signalr methods need to dispatch an action to redux to communicate changes to the app
    hub.client.helloWorld = () => {
        store.dispatch({type: "HELLO_WORLD", payload: "Hello World"});
    }

    hub.client.messageTransfer = (messageObject) => {
        let sendObject = JSON.parse(messageObject);
        store.dispatch({ type: "MESSAGE_TRANSFER", payload: sendObject });
    }

    hub.client.updateUserChatList = (data) => {
        store.dispatch({ type: "ADD_USER_CHAT_LIST", payload: data });
    }

    hub.client.removeUserChatList = (data) => {
        store.dispatch({ type: "REMOVE_USER_CHAT_LIST", payload: data });
    }

    // Starts the connection
    $.connection.hub.start().done(
        () => {
            ReactDOM.render(
                <Provider store={store}>
                    <Routes />
                </Provider>
                , document.querySelector('.root')
            );

            // Update other instructor clients online student list
            hub.server.onConnectionFinished();

            let loader = document.getElementsByClassName("loader-backdrop")[0];

            loader.style.cssText = "animation: spaLoaderFadeOut 1s; opacity: 0; z-index: 0;";
        }
    );
}