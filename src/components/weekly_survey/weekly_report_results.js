// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class WeeklyReportResult extends Component {

	componentDidMount() {

        // url for the getWeeklyReport
		const url = '/SPA/getWeeklyReport';
		this.props.courseDrillAction(url);
	}



	render() {



		if (this.props.courseDrill > [0]) {
			const renderList = this.props.courseDrill.map((item, i) => {
				return (
                    // Key for error in console due to mapping
					<div key={i}>
						<hr />
						<h4>Date Submitted: </h4><p>{item.Date}</p>
                        <h5>Course Position: </h5><p>{item.CoursePosition}</p>
                        <h5>Need Help: </h5><p>{item.NeedHelp}</p>
                        <h5>Materials and Supplies Needed: </h5><p>{item.MaterialsAndSupplies}</p>
                        <h5>Meetups: </h5><p>{item.Meetups}</p>
                        <h5>Positive Experiences: </h5><p>{item.PositiveExperiences}</p>
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
						<hr />
					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);


		} else {
			return (<h6>No weekly reports yet...</h6>)
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


export default connect(mapStateToProps, mapDispatchToProps)(WeeklyReportResult);