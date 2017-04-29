﻿import React from 'react';

export default (props) => {

    // Classname
    const userClass = props.message.Sender === props.userRole ? "spaMessagingCurrentUser" : "spaMessagingOtherUser";

    return (
        <div className={"spaMessageListItem " + userClass}>
            <pre>{props.message.Message}</pre>
        </div>
    );
}