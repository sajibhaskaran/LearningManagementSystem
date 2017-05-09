﻿// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Loader
import Loader from '../../components/loader/loader';

//actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';




class WeeklyReportResult extends Component {

	componentDidMount() {
		// getting the user info from the props/params
		const userInfo = this.props.match.params.value.split(',');
		// url for the getWeeklyReport
		const url = `/SPA/getWeeklyReport?Id=${userInfo[1]}`;

		this.props.resultsInstructorViewAction(url);
	}



	render() {


		// checking to see if the data exists
		if (this.props.resultsInstructorView > [0]) {
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				return (
					// Key for error in console due to mapping
					<div key={i}>
						<hr className="style-two" />
						<h4>Date Submitted: </h4><p>{item.Date}</p>
						<h5>Course Position: </h5><p>{item.CoursePosition}</p>
						<h5>Need Help: </h5><p>{item.NeedHelp}</p>
						<h5>Materials and Supplies Needed: </h5><p>{item.MaterialsAndSupplies}</p>
						<h5>Meetups: </h5><p>{item.Meetups}</p>
						<h5>Positive Experiences: </h5><p>{item.Positives}</p>
						<h5>Complaints: </h5><p>{item.Complaints}</p>
						<h5>Hours Studied: </h5><p>{item.HoursStudied}</p>
						<h5>Job Search: </h5><p>{item.JobSearch}</p>
						<h5>Referral: </h5><p>{item.Referral}</p>
						<h5>Miscellaneous: </h5><p>{item.Miscellaneous}</p>


					</div>
				);


			});

			
			return (
				<div className="container text-center">

					<div className="row">
						<h1>Weekly Reports</h1>
						<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[2]}</h5>
						
					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);


		} else {
			
			return (<h6>No weekly reports yet</h6>);
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


export default connect(mapStateToProps, mapDispatchToProps)(WeeklyReportResult);