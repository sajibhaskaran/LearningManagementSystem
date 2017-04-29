import React from 'react';
import MessageItem from './messaging_message_list_item';

export default (props) => {

    // Loop over messages and render messages
    const items = props.messages.map((message) => {
        return <MessageItem key={Math.random()} userRole={props.userRole} message={message} />;
    });

    return (
        <div className="spaMessageList">
            {items}
        </div>
    );
}