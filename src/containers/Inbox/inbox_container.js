import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import MessagingContainer from './messaging_container';
import StudentChatList from '../../components/inbox/inbox_student_chat_list';

class Inbox extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.renderStudentBarList = this.renderStudentBarList.bind(this);
    }

    // Conditionally render left student bar for talking to students
    renderStudentBarList() {

        // Check if this user is in the neccessary role
        if (this.state.Role !== "TechAcademyStudent" &&
            this.state.Role !== "UniversityStudent") {

            

            // Return side bar with list of students online
            return <StudentChatList userList={users} />
        }
    }

    render() {
        return (
            <div id="spaMessagingInbox" className="row">
                {/*

                    <InfoTabContainer /> {/* Contains information about currently selected user.  (Only displayed for non-students ) }
                */}

                {/* Has col-xs-2 */}
                {this.renderStudentBarList()}

                {/* Has col-xs-8 */}
                <MessagingContainer />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        UserInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(Inbox);

const users = [
    {
        Name: "Aaron Medina",
        ImageUrl: "http://2.bp.blogspot.com/-KADkuJuIa0o/T9dvjEoABjI/AAAAAAAALg0/zc5inTzNFZg/s1600/aaron+medina4.jpg"
    },
    {
        Name: "Temple Naylor",
        ImageUrl: "https://avatars0.githubusercontent.com/u/22266227?v=3&s=400"
    },
    {
        Name: "Saji Baskaran",
        ImageUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAApLAAAAJGE1NWFhZGI3LWVmNjYtNDQzZS04OGMzLWMwYWZhNDg2NzExNw.jpg"
    }
];