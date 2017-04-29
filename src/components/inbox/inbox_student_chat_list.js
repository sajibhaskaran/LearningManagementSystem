import React from 'react';

import User from './inbox_student_chat_list_item';

export default (props) => {

    // Map over and produce a number of student images
    const userList = props.userList.map((user) => {
        return <User key={Math.random()} user={user} />;
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