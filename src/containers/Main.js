// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			
			<StudentDashboard />
			
			);


	}


}



function mapStateToProps(state) {
	return {
		
	};

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		
	},
		dispatch
	);

}

export default connect(mapStateToProps, mapDispatchToProps)(UserImage);
