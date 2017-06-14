// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Accordion, Tab, Tabs } from 'react-bootstrap';
// actions
import { feedbackAction } from '../../actions/Feedback/get_feedback_action';
import { loadedFalse } from "../../actions/Loader/loaded_false_action";

// Loader
import Loader from '../../components/loader/loader';


class Feedback extends Component {

	constructor(props) {
		super();
		this.state = {
			
			activeTab: props.activeTab || 1
		};

		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
		
		// calling the action
		this.props.feedbackAction();
	}

	componentWillMount() {

		// Begin loader animation
		this.props.loadedFalse();
	}



	// function to build a list of daily reports feedbacks
	renderListDaily() {
		if (this.props.feedback > [0]) {
			

			// building a list
			const renderList = this.props.feedback.DailyFeedbacks.map((item, i) => {
				if (i < 3) {
					return (

						<div key={i} className="text-left">

							<hr className="style-two" />
							<h6><strong>Date Report Submitted :</strong> {item.Date}</h6>
							<h6><strong>Course Position : </strong>{item.CoursePosition}</h6>
							<h6><strong>Feedback : </strong>{item.Feedback}</h6>
							<h6><strong>Positive Experiences :</strong>{item.PositiveExperiences}</h6>
							<h6><strong>Help Needed : </strong>{item.NeedHelp}</h6>
							<h6><strong>Hours Studied :</strong>{item.HoursStudied}</h6>
							<h6><strong>Feedback Date: </strong><mark>{item.Date}</mark></h6>
							<h6><strong>Content: </strong><mark>{item.Content}</mark></h6>


						</div>
					);
				} else {
					return (

						<Panel key={i} header={item.Date} eventKey={i} bsStyle="primary" className="text-center">
							<hr className="style-two" />
							<h6><strong>Date Report Submitted :</strong> {item.Date}</h6>
							<h6><strong>Course Position : </strong>{item.CoursePosition}</h6>
							<h6><strong>Feedback : </strong>{item.Feedback}</h6>
							<h6><strong>Positive Experiences :</strong>{item.PositiveExperiences}</h6>
							<h6><strong>Help Needed : </strong>{item.NeedHelp}</h6>
							<h6><strong>Hours Studied :</strong>{item.HoursStudied}</h6>
							<h6><strong>Feedback Date: </strong><mark>{item.Date}</mark></h6>
							<h6><strong>Content: </strong><mark>{item.Content}</mark></h6>



						</Panel>
					);


				}



			});

			return renderList;
		}

	}

	// function to build a list of weekly reports feedbacks
	renderListWeekly() {
		if (this.props.feedback > [0]) {

			// building a list
			const renderList = this.props.feedback.WeeklyFeedbacks.map((item, i) => {
				if (i < 3) {
					return (
						<div key={i} className="text-left">

						<hr className="text-left" />
							<h6><strong>Date Submitted : </strong>{item.Date}</h6>
							<h6><strong>Course Position : </strong>{item.CoursePostion}</h6>
							<h6><strong>Need Help : </strong>{item.NeedHelp}</h6>
							<h6><strong>Materials and Supplies Needed : </strong>{item.Miscellaneous}</h6>
							<h6><strong>Meetups : </strong>{item.Meetups}</h6>
							<h6><strong>Positive Experiences : </strong>{item.Positives}</h6>
							<h6><strong>Complaints : </strong>{item.Complaints}</h6>
							<h6><strong>Hours Studied : </strong>{item.HoursStudied}</h6>
							<h6><strong>Job Search : </strong>{item.JobSearch}</h6>
							<h6><strong>Referral : </strong>{item.Referral}</h6>
							<h6><strong>Miscellaneous : </strong>{item.Miscellaneous}</h6>
							<h6><strong>Feedback : </strong><mark>{item.Feedback}</mark></h6>

						</div>
							);
				} else {
					return (
						<Panel key={i} header={item.Date} eventKey={i} bsStyle="primary" className="text-center">
							<h6><strong>Date Submitted : </strong>{item.Date}</h6>
							<h6><strong>Course Position : </strong>{item.CoursePostion}</h6>
							<h6><strong>Need Help : </strong>{item.NeedHelp}</h6>
							<h6><strong>Materials and Supplies Needed : </strong>{item.Miscellaneous}</h6>
							<h6><strong>Meetups : </strong>{item.Meetups}</h6>
							<h6><strong>Positive Experiences : </strong>{item.Positives}</h6>
							<h6><strong>Complaints : </strong>{item.Complaints}</h6>
							<h6><strong>Hours Studied : </strong>{item.HoursStudied}</h6>
							<h6><strong>Job Search : </strong>{item.JobSearch}</h6>
							<h6><strong>Referral : </strong>{item.Referral}</h6>
							<h6><strong>Miscellaneous : </strong>{item.Miscellaneous}</h6>
							<h6><strong>Feedback : </strong><mark>{item.Feedback}</mark></h6>
						</Panel>
					);
				}
			});
			return renderList;
		}
	}

	// function to build a list of weekly reports feedbacks
	renderListDrills() {
		if (this.props.feedback > [0]) {

			// building a list
			const renderList = this.props.feedback.DrillFeedbacks.map((item, i) => {
				if (i < 3) {
					return (
						<div key={i} className="text-left">

							<hr className="text-left" />
							<h6><strong>Date : </strong>{item.Date}</h6>
							<h6><strong>Submission Text : </strong>{item.SubmissionText}</h6>
							<h6><strong>Passed : </strong>{item.Passed}</h6>
							<h6><strong>Feedback : </strong><mark>{item.Feedback}</mark></h6>

						</div>
					);
				} else {
					return (
						<Panel key={i} header={item.Date} eventKey={i} bsStyle="primary" className="text-center">
							<h6><strong>Date : </strong>{item.Date}</h6>
							<h6><strong>Submission Text : </strong>{item.SubmissionText}</h6>
							<h6><strong>Passed : </strong>{item.Passed}</h6>
							<h6><strong>Feedback : </strong><mark>{item.Feedback}</mark></h6>
						</Panel>
					);
				}
			});
			return renderList;
		}
	}

	handleSelect(selectedTab) {
		// The active tab must be set into the state so that
		// the Tabs component knows about the change and re-renders.
		this.setState({
			activeTab: selectedTab
		});
	}


	render() {
		// checking the props
		
			//<Loader Loaded={this.props.Loaded} className="loader">

			return (
				
					<div className="col-xs-12 text-center">
					<h1>Inbox</h1>
					<Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
						<Tab eventKey={1} title="Daily Reports Feedback">
							<h3 className="text-center">Daily Report Feedback</h3>
							<Accordion>
								{this.renderListDaily()}
							</Accordion>
						</Tab>
						<Tab eventKey={2} title="Weekly Reports Feedback">
							<h3 className="text-center">Weekly Report Feedback</h3>
							<Accordion>
								{this.renderListWeekly()}
							</Accordion>
						</Tab>
						<Tab eventKey={3} title="Drills Feedback">
							<h3 className="text-center">Drills Feedback</h3>
							<Accordion>
								{this.renderListDrills()}
							</Accordion>
						</Tab>
						<Tab eventKey={4} title="Other Messages">
							<h3 className="text-center">Messages</h3>
						</Tab>
						
					</Tabs>
						
						
					</div>
				
			);
		

	}

}


function mapStateToProps(state) {
	return {
		feedback: state.Feedback,
		Loaded: state.Loaded
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		feedbackAction,
		loadedFalse
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
