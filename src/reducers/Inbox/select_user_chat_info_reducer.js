import { SELECT_USER_CHAT, SELECT_USER_CHAT_WAITING } from "../../actions/Inbox/select_user_chat_action";

export default function (state = null, action) {

    switch (action.type) {

        // triggers when a user is selected and clears our message state
        case SELECT_USER_CHAT_WAITING:
            return null;

        // triggers when a user promise has resolved and creates an initial messages state
        case SELECT_USER_CHAT:
            return action.payload.data.UserInfo;
    }

    return state;
}