import axios from 'axios';

export const ONLINE_USER_CHAT_LIST = "ONLINE_USER_CHAT_LIST";

export function getUserChatList() {

    // url
    const url = "/SPA/GetOnlineUsers";

    // Request
    const request = axios.get(url);

    return {
        type: ONLINE_USER_CHAT_LIST,
        payload: request
    }
}