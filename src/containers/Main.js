// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { profileAccess } from "../../actions/profile_access_action";

class Main extends Component {
	constructor(props) {
		super(props);
	}


	componentDidMount() {
		// calling the action to bring the user info
		this.props.profileAccess()
	}

	render() {
		return (
			
			<StudentDashboard />
			
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
