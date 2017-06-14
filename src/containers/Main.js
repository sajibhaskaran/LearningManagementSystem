import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { profileAccess } from "../actions/profile_access_action";
import { fetchStudentCourseView } from "../actions/fetch_student_course_view";

// components
import StudentDashboard from '../containers/courses_dashboard';
import StudentCourseView from '../containers/student_course_view';



class Main extends Component {
	constructor(props) {
		super(props);
	}

   

	componentDidMount() {
        // calling the action to get user info.
        this.props.profileAccess();
       
          
      
	}

	// checking to see where student left off, displaying that page, otherwise displaying the dashboard
	renderPage() {
		// checking to see if props exists
        if (this.props.userData !== null) {
            if (this.props.userData.PageNumber >= 1) {

                return (

                    <StudentCourseView
                        courseId={':' + this.props.userData.CurrentCourse}
                        pageNumber={':' + this.props.userData.PageNumber}
                    />
                );
            }
            else {
                return <StudentDashboard />
            }
		}
		


	}



	render() {
		
		return (
			<div>
				{this.renderPage()}
			</div>
		);

	}



}

function mapStateToProps(state) {
	return {
		userData: state.userData
	};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ profileAccess }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);







