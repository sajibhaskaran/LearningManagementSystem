// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { profileAccess } from "../../actions/profile_access_action";

// components
import StudentDashboard from "../courses_dashboard";

class Main extends Component {
	constructor(props) {
		super(props);
	}


	componentDidMount() {
		// calling the action to bring the user info
		this.props.profileAccess()
	}


	renderPage() {
		// checking if props exists.
		if (this.props.userData != null) {

			return (

				<StudentDashboard name={this.props.userData.Name} courseId={this.props.userData.courseId} pageNumber={this.props.userData.pageNumber} />
				
				)

		}

	}

	render() {
		return (
			<div>{this.renderPage()} </div>
			
			
			);


	}


}



function mapStateToProps(state) {
	return {
		userData: state.userData
	};

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		profileAccess
	},
		dispatch
	);

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
