// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class DailyReportResult extends Component{

	componentDidMount() {
		
		const url = '/SPA/getDailyReport';
		
		this.props.courseDrillAction(url);
	}



	render(){
		
		
		
		if (this.props.courseDrill > [0]){
		
			const renderList = this.props.courseDrill.map((item, i)=> {
				return (				
					
					<div key ={i}>
					<hr />
					<h4>Date Submitted: </h4><p>{item.Date}</p>
					<h5>Course Position: </h5><p>{item.CoursePosition}</p>
					<h5>Feedback: </h5><p>{item.Feedback}</p>
					<h5>Hours Studied: </h5><p>{item.HoursStudied}</p>
					<h5>Positive Experiences: </h5><p>{item.PositiveExperiences}</p>
					<h5>Help Needed: </h5><p>{item.NeedHelp}</p>

					
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
		return(<h6>No daily reports yet...</h6>)
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