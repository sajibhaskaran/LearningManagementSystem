// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';




class DailyReportResult extends Component {

	componentDidMount() {
		// getting the user info from the props/params
		const userInfo = this.props.match.params.value.split(',');
		// url to pass to the end point
		const url = `/SPA/getDailyReport?Id=${userInfo[1]}`;
		// calling the action
		this.props.resultsInstructorViewAction(url);
	}



	render() {


		// checking to see if data exists
		if (this.props.resultsInstructorView > [0]) {
			
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				return (

					<div key={i}>
						<hr className="style-two" />
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
						<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[2]}</h5>
					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);


		} else {
			return (<h6>No daily reports yet</h6>)
		}


	}

}

function mapStateToProps(state) {
	return { resultsInstructorView: state.ResultsInstructorView };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		resultsInstructorViewAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyReportResult);