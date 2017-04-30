import axios from 'axios';

// On data being received
export const SELECT_USER_CHAT = "SELECT_USER_CHAT";

export function selectUserChat(encryptedId) {

    // If a student is sending this request, change the request type
    if (encryptedId === null || encryptedId === undefined) {
        const url = "/SPA/StudentUserChat";

        const request = axios.get(url);
        return {
            type: SELECT_USER_CHAT,
            payload: request
        }
    }

    // Url
    const url = `/SPA/SelectUserChat`;

    // Get request
    const request = axios.get(url, {
        params: {
            encryptedUserId: encryptedId // Must be in params due to base64 encoding
        }
    });

    return {
        type: SELECT_USER_CHAT,
        payload: request
    }
}

// On clearing data to create a loader
export const SELECT_USER_CHAT_WAITING = "SELECT_USER_CHAT_WAITING";

export function selectUserChatWaiting() {
    return {
        type: SELECT_USER_CHAT_WAITING,
        payload: null
    }
}