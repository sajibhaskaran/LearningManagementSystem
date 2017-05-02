// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class DailyReport extends Component{

	componentDidMount() {
		
		const url = '/SPA/getDailyReport';
		console.log(url);
		this.props.courseDrillAction(url);
	}



	render(){
		return (
			
			
			);
	}

}

function mapStateToProps(state) {
	return { courseDrill: state.CourseDrill };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		courseDrillAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CourseDrill);