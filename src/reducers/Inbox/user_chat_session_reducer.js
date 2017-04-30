import { SELECT_USER_CHAT, SELECT_USER_CHAT_WAITING } from "../../actions/Inbox/select_user_chat_action";
import { FETCH_ROLE } from '../../actions/navigation_bar_role_action';

// UserInfo is with regard to the user currently viewing this page
// Messages are for messages between currently selected user
// SelectedUserInfo is the information of the currently selected user if THIS user is an instructor
export default function (state = {
    UserInfo: {},
    Messages: [],
    SelectedUserInfo: {}
},
    action) {

    switch (action.type) {

        // triggers when a user is selected and clears our message state
        case SELECT_USER_CHAT_WAITING:
            return {
                UserInfo: state.UserInfo,
                Messages: [],
                SelectedUserInfo: {}
            };

        // triggers when a user promise has resolved and creates an initial messages state
        case SELECT_USER_CHAT:
            
            const messages = action.payload.data.Messages;

            // Create object for this user
            const newSelectedUserObject = {
                UserInfo: state.UserInfo,
                Messages: messages === null ? [] : messages,
                SelectedUserInfo: action.payload.data.UserInfo // Different than the first userinfo in this object
            };
            
            return newSelectedUserObject;

        // concat state based on signalR chat messages
        case "MESSAGE_TRANSFER":
            
            // This function returns state based on information about the sender and receiver
            return messageTransferFilter(state, action);

        case FETCH_ROLE:
            return {
                UserInfo: action.payload.data, // Get this user's data and set it so it is accessible from this reducer
                Messages: state.Messages,
                SelectedUserInfo: state.SelectedUserInfo
            };
    }

    return state;
}

// Filters the information of this message and returns the correct information that will be needed by this user
function messageTransferFilter(state, action) {

    // Role assumes they are a student
    let role = "Student";

    // Only role types that matter are instructor or student
    if (state.UserInfo.Role !== "TechAcademyStudent" &&
        state.UserInfo.Role !== "UniversityStudent") {
        
        // User is not a student
        role = "Instructor";
    }

    // Execute logic based on this user's role
    switch (role) {

        case "Student":

            // Never directly manipulate state so copy to new variable
            let newStateMessages = state.Messages.concat([action.payload]);

            let newState = {
                UserInfo: state.UserInfo,
                Messages: newStateMessages,
                SelectedUserInfo: state.SelectedUserInfo
            };
            
            return newState;

        case "Instructor":

            // Run instructor logic

            // Find the student encryptedId
            let studentEncryptedId = action.payload.SenderEncryptedId;

            if (studentEncryptedId === state.UserInfo.EncryptedId) {
                // Id mathed this user's id so its the other one
                studentEncryptedId = action.payload.ReceiverEncryptedId;
            }
            // Check if the instructor is currently chatting with this student
            if (studentEncryptedId === state.SelectedUserInfo.EncryptedUserId) {

                // Never directly manipulate state so copy to new variable
                let newStateMessages = state.Messages.concat([action.payload]);

                let newState = {
                    UserInfo: state.UserInfo,
                    Messages: newStateMessages,
                    SelectedUserInfo: state.SelectedUserInfo
                };

                return newState;
            }
            return state;
    }
}