import React, { Component } from 'react';

export default class SendMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TextMessage: ""
        };

        // Bind this to the object
        this.onTextareaChange = this.onTextareaChange.bind(this);
    }

    // Control the component input
    onTextareaChange(e) {
        e.preventDefault();
        
        // Save value
        const value = e.target.value;

        // Set the value state
        this.setState({ TextMessage: value});
    }

    onSendMessage(e) {
        e.preventDefault();

        if (this.state.TextMessage.trim().length > 1) {
            
            console.log(this.state.TextMessage);
            this.setState({ TextMessage: "" });
        }
    }

    render() {
        return (
            <div className="spaInboxSendMessage">
                <textarea
                    value={this.state.TextMessage}
                    onChange={e => this.onTextareaChange(e)}
                ></textarea>
                <input
                    type="button"
                    value="Send"
                    onClick={e => { this.props.onNewMessage(this.state.TextMessage); this.setState({ TextMessage: "" }); }}
                />
            </div>
        );
    }
}