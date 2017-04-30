import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import SendMessage from '../../components/inbox/messaging_send_message';
import Messages from '../../components/inbox/messaging_message_list';

// Actions
import { selectUserChat, selectUserChatWaiting } from '../../actions/Inbox/select_user_chat_action';

class Messaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Messages: [],
            Role: "Student",
            initRole: false
        };

        // Bind methods
        this.onNewMessage = this.onNewMessage.bind(this);
    }

    // Add messages to state
    onNewMessage(message) {

        // Add new message object to state
        //this.setState({ Messages: this.state.Messages.concat([{ Sender: this.state.Role, Message: message }]) });

        let receiverId = null;

        // recieverEncryptedId may be null if a student is sending the message
        if (this.state.Role === "Instructor") {
            receiverId = this.props.SelectedUserChatInfo.EncryptedUserId;
        }

        // Construct sending object
        const messageObject = {
            SenderEncryptedId: this.props.UserInfo.EncryptedId,
            SenderRole: this.state.Role,
            ReceiverEncryptedId: receiverId,
            ReceiverRole: this.state.Role === "Student" ? "Instructor" : "Student",
            Message: message
        };

        // SignalR method sitting inside of our hub
        hub.server.messageTransfer(JSON.stringify(messageObject));
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.navigationRole !== null && this.state.initRole === false) {

            if (nextProps.navigationRole !== "TechAcademyStudent" &&
                nextProps.navigationRole !== "UniversityStudent") {
                this.setState({ Role: "Instructor", initRole: true });
            } else {

                // Make call to get previous 20 messages
                //this.props.selectUserChatWaiting();
                this.props.selectUserChat(null); // Null allows for the student's get request for this action

                this.setState({ initRole: true });
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

        // Get messageList
        let messageList = document.getElementsByClassName("spaMessageList")[0];

        // Scroll to bottom of scroll bar
        messageList.scrollTop = messageList.scrollHeight;
    }

    componentDidMount() {

        // Get messageList
        let messageList = document.getElementsByClassName("spaMessageList")[0];

        // Scroll to bottom of scroll bar
        messageList.scrollTop = messageList.scrollHeight;
    }

    render() {

        // Check to make sure we don't user the whole inbox size
        let col = "col-xs-12";

        if (this.state.Role !== "Student") {
            col = "col-xs-6";
        }
        
        return (
            <div style={{ height: "100%", borderRight:"1px solid #d3d3d3" }} className={col}>
                <div className="row">

                    <Messages userRole={this.state.Role} Loaded={this.props.SelectedUserChat} messages={this.props.ChatMessages.Messages} />

                    <SendMessage onNewMessage={message => this.onNewMessage(message)} />

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        SelectedUserChatInfo: state.SelectedUserChatInfo,
        SelectedUserChat: state.SelectedUserChat,
        navigationRole: state.navigationRole,
        ChatMessages: state.ChatMessages,
        UserInfo: state.UserInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUserChat: selectUserChat,
        selectUserChatWaiting: selectUserChatWaiting
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Messaging);