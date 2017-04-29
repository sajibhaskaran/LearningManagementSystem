import React from 'react';

export default (props) => {


    return (
        <div className="spaStudentChatListItem">
            <img src={props.user.ImageUrl} alt="Profile Picture" />
            <h6>{props.user.Name}</h6>
        </div>
    );
}