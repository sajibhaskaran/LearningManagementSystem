// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class CourseDrill extends Component{

	componentDidMount() {
		this.props.courseDrillAction(this.props.match.params.value);
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