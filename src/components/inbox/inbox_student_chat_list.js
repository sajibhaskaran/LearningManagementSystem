import React from 'react';

import User from './inbox_student_chat_list_item';

export default (props) => {

    if (props.userList === null) {
        return (
            <div className="col-xs-2">
                <div className="row">
                    <div className="spaInboxStudentUserList">
                        
                    </div>
                </div>
            </div>
        );
    }

    // Map over and produce a number of student images
    const userList = props.userList.map((user, i) => {

        return <User selectChatUser={encryptedId => props.selectChatUser(encryptedId)} key={user.EncryptedUserId} user={user} />;
    });

    return (
        <div className="col-xs-2">
            <div className="row">
                <div className="spaInboxStudentUserList">
                    {userList}
                </div>
            </div>
        </div>
    );
}