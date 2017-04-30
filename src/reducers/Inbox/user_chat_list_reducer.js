import { ONLINE_USER_CHAT_LIST } from '../../actions/Inbox/get_user_chat_list_action';

export default function (state = null, action) {

    switch (action.type) {

        case ONLINE_USER_CHAT_LIST:
            return action.payload.data;

        case "ADD_USER_CHAT_LIST":
            // Add this user info to the list
            return state.concat([action.payload]);

        case "REMOVE_USER_CHAT_LIST":
            let newState = [];

            for (let i = 0; i < state.length; i++) {
                if (state[i].EncryptedUserId !== action.payload) {
                    newState.push(state[i]);
                }
            }

            return newState;
    }

    return state;
}