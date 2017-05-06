// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';
// importing components



class DailyReportResult extends Component {

	componentDidMount() {

		const url = `/SPA/getDailyReport?Id=${this.props.match.params.id}`;
		
		this.props.resultsInstructorViewAction(url);
	}



	render() {



		if (this.props.resultsInstructorView !== null) {
			console.log(this.props);
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				return (

					<div key={i}>
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


export default connect(mapStateToProps, mapDispatchToProps)(DailyReportResult);