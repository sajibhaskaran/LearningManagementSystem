import React from 'react';

export default (props) => {

    // Make check to see if the image url exists
    const imageUrl = props.user.ImageUrl.length === 0 ? "/images/placeholders/person_placeholder.png" : props.user.ImageUrl;

    return (
        <div className="spaStudentChatListItem" onClick={() => props.selectChatUser(props.user.EncryptedUserId)}>
            <div className="spaStudentChatListItemContent">
                <img src={imageUrl} />
            </div>

            <div className="text-center spaStudentChatListItemContent">
                <h6>{props.user.Name}</h6>
            </div>
        </div>
    );
}