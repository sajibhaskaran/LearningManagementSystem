import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import MessagingContainer from './messaging_container';
import StudentChatList from '../../components/inbox/inbox_student_chat_list';
import StudentInfoTab from '../../components/inbox/inbox_info_tab';

// Actions
import { getUserChatList } from '../../actions/Inbox/get_user_chat_list_action';
import { selectUserChat, selectUserChatWaiting } from '../../actions/Inbox/select_user_chat_action';

class Inbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            InitUserList: false,
            InitUserSelect: false
        };

        this.renderStudentBarList = this.renderStudentBarList.bind(this);
        this.selectChatUser = this.selectChatUser.bind(this);
    }

    // Trigger selected user 
    selectChatUser(encryptedId) {
        this.props.selectUserChatWaiting();
        this.props.selectUserChat(encryptedId);

        if (!this.state.InitUserSelect) {
            this.setState({ InitUserSelect: true });
        }
    }

    // Conditionally render left student bar for talking to students
    renderStudentInfoTab() {

        if (this.props.UserInfo !== null) {

            // Check if this user is in the neccessary role
            if (this.props.UserInfo.Role !== "TechAcademyStudent" &&
                this.props.UserInfo.Role !== "UniversityStudent") {

                // Return side bar with list of students online
                return <StudentInfoTab UserInfo={this.props.SelectedUserChatInfo} />
            }
        }
    }

    // Conditionally render left student bar for talking to students
    renderStudentBarList() {

        if (this.props.UserInfo !== null) {

            // Check if this user is in the neccessary role
            if (this.props.UserInfo.Role !== "TechAcademyStudent" &&
                this.props.UserInfo.Role !== "UniversityStudent") {

                // Make call to get all online users
                if (this.state.InitUserList === false) {
                    this.props.getUserChatList();
                }

                // Return side bar with list of students online
                return (
                    <StudentChatList
                        selectChatUser={encryptedId => this.selectChatUser(encryptedId)}
                        userList={this.props.InboxUserList}
                    />
                );
            }
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.InboxUserList !== null) {
            if (this.state.InitUserList === false) {

                // Set inituserlist to true so only one getUserChatList call ever gets made
                this.setState({ InitUserList: true });
            }

            if (!this.state.InitUserSelect) {
                this.selectChatUser(nextProps.InboxUserList[0].EncryptedUserId);
            }
        }
    }

    render() {

        const roleExists = this.props.UserInfo !== null ? true : false;

        const role = roleExists ? this.props.UserInfo.Role : "";

        const roleStyle = role !== "TechAcademyStudent" && role !== "UniversityStudent" ? {} : { marginLeft: "0px" };
        roleStyle["left"] = "-100%";

        return (
            <div style={roleStyle} id="spaMessagingInbox" className="row">

                {/* Has col-xs-2 */}
                {this.renderStudentBarList()}

                {/* Has col-xs-6 */}
                <MessagingContainer />

                {/* Has col-xs-4 */}
                {this.renderStudentInfoTab()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        UserInfo: state.UserInfo,
        InboxUserList: state.InboxUserList,
        SelectedUserChatInfo: state.SelectedUserChatInfo
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserChatList: getUserChatList,
        selectUserChat: selectUserChat,
        selectUserChatWaiting: selectUserChatWaiting
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);