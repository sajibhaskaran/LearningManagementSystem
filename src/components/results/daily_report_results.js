// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class DailyReportResult extends Component{

	componentDidMount() {
		
		const url = '/SPA/getDailyReport';
		console.log(url);
		this.props.courseDrillAction(url);
	}



	render(){
		
		
		
		if(this.props.courseDrill !== null){
			console.log(this.props.courseDrill);
			const renderList = this.props.courseDrill.map((item, i)=> {
				return (				
					
					<div key ={i}>
					<hr />
					<h6>Date Submitted: {item.Date}</h6>
					<h6>Course Position: {item.CoursePosition} </h6>
					<h6>Feedback: {item.Feedback} </h6>
					<h6>Hours Studied: {item.HoursStudied} </h6>
					<h6>Positive Experiences: {item.PositiveExperiences} </h6>
					<h6>Help Needed: {item.NeedHelp} </h6>

					
					</div>
					);


	});
	

	return (
					<div className="container text-center">

						<div className="row">
							<h1>Daily Reports</h1>
							<hr />
						</div>

						<div className="col-sm-12 text-left">
									
							{renderList}
									
						</div>

					</div>
			
			);
			
		
	}else{
		return(<h6>Not working...</h6>)
		}

		
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


export default connect(mapStateToProps, mapDispatchToProps)(DailyReportResult);