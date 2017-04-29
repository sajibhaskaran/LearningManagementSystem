export function signalRStart(store, callback) {

    hub = $.connection.MarketingHub;

    // Declare all clientside functions here
    hub.client.helloWorld = () => {
        store.dispatch({type: "HELLO_WORLD", payload: "Hello World"});
    }

    $.connection.hub.start(() => callback);
}