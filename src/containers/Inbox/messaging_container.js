import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import SendMessage from '../../components/inbox/messaging_send_message';
import Messages from '../../components/inbox/messaging_message_list';

class Messaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Messages: messages,
            Role: "LocalInstructor"
        };

        // Bind methods
        this.onNewMessage = this.onNewMessage.bind(this);
    }

    // Add messages to state
    onNewMessage(message) {

        // Add new message object to state
        this.setState({ Messages: this.state.Messages.concat([{ Sender: this.state.Role, Message: message }]) });
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

        if (this.state.Role !== "TechAcademyStudent" &&
            this.state.Role !== "UniversityStudent") {
            col = "col-xs-8";
        }

        return (
            <div style={{ height: "100%" }} className={col}>
                <div className="row">

                    <Messages userRole={this.state.Role} messages={this.state.Messages} />

                    <SendMessage onNewMessage={message => this.onNewMessage(message)} />

                </div>

            </div>
        );
    }
}

export default connect(null)(Messaging);

// Test messaging
const messages = [
    {
        Sender: "LocalInstructor",
        Message: "Message Content 1"
    },
    {
        Sender: "student",
        Message: `My name is Aaron Medina the best developer anyone has ever had!!!!!

and I am testin     g crap`
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 3"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 4"
    },
    {
        Sender: "student",
        Message: "Message Content 5"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 6"
    },
    {
        Sender: "student",
        Message: `My name is Aaron Medina the best developer anyone has ever had!!!!!

and I am testin     g crap`
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 3"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 4"
    },
    {
        Sender: "student",
        Message: "Message Content 5"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 6"
    },
    {
        Sender: "student",
        Message: `My name is Aaron Medina the best developer anyone has ever had!!!!!

and I am testin     g crap`
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 3"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 4"
    },
    {
        Sender: "student",
        Message: "Message Content 5"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 6"
    },
    {
        Sender: "student",
        Message: `My name is Aaron Medina the best developer anyone has ever had!!!!!

and I am testin     g crap`
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 3"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 4"
    },
    {
        Sender: "student",
        Message: "Message Content 5"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 6"
    },
    {
        Sender: "student",
        Message: `My name is Aaron Medina the best developer anyone has ever had!!!!!

and I am testin     g crap`
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 3"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 4"
    },
    {
        Sender: "student",
        Message: "Message Content 5"
    },
    {
        Sender: "LocalInstructor",
        Message: "Message Content 6"
    }
];