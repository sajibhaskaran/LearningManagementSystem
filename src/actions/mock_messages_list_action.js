export const selectMessage = (message) => {
    console.log("selected ", message.name);

    return {
        type: 'MESSAGE_SELECTED',
        payload: message
    }
};