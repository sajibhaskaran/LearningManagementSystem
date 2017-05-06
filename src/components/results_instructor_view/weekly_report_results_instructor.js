﻿// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';
// importing components



class WeeklyReportResult extends Component {

	componentDidMount() {

		// url for the getWeeklyReport
		const url = `/SPA/getWeeklyReport?Id=${this.props.match.params.id}`;

		this.props.resultsInstructorViewAction(url);
	}



	render() {



		if (this.props.resultsInstructorView !== null) {
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				return (
					// Key for error in console due to mapping
					<div key={i}>
						<hr />
						<h4>Course Position: </h4><p>{item.CoursePosition}</p>
						<h4>Need Help: </h4><p>{item.NeedHelp}</p>
						<h4>Materials and Supplies Needed: </h4><p>{item.MaterialsAndSupplies}</p>
						<h4>Meetups: </h4><p>{item.Meetups}</p>
						<h4>Positive Experiences: </h4><p>{item.PositiveExperiences}</p>
						<h4>Complaints: </h4><p>{item.Complaints}</p>
						<h4>Hours Studied: </h4><p>{item.HoursStudied}</p>
						<h4>Job Search: </h4><p>{item.JobSearch}</p>
						<h4>Referral: </h4><p>{item.Referral}</p>
						<h4>Miscellaneous: </h4><p>{item.Miscellaneous}</p>


					</div>
				);


			});


			return (
				<div className="container text-center">

					<div className="row">
						<h1>Weekly Reports</h1>
						<hr />
					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);


		} else {
			return (<h6>Not working...</h6>)
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