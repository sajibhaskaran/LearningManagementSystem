﻿// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class CourseDrill extends Component{

	componentDidMount() {
		
		const url = `/SPA/getDrills?courseId=${this.props.match.params.value}`;
		console.log(url);
		this.props.courseDrillAction(url);
	}



	render(){
		console.log(this.props.courseDrill);
		return (
			
					<div className="col-xs-12">
						<h1 className="text-center">Course Drill </h1>
						<h3>Drills</h3>
						<p>&nbsp;</p>					
													
						
												
					</div>
			
			
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