import { SELECT_USER_CHAT, SELECT_USER_CHAT_WAITING } from "../../actions/Inbox/select_user_chat_action";

export default function (state = null, action) {

    switch (action.type) {

        // triggers when a user is selected and sets initial loaded value to false
        case SELECT_USER_CHAT_WAITING:
            return false;

        // triggers when a user promise has resolved and sets loaded to true
        case SELECT_USER_CHAT:
            return true;
    }

    return state;
}