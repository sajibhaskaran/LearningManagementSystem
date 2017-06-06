// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Accordion } from 'react-bootstrap';
// actions
import { feedbackAction } from '../../actions/Feedback/get_feedback_action';
import { loadedFalse } from "../../actions/Loader/loaded_false_action";

// Loader
import Loader from '../../components/loader/loader';


class Feedback extends Component {

	componentDidMount() {
		
		// calling the action
		this.props.feedbackAction();
	}

	componentWillMount() {

		// Begin loader animation
		this.props.loadedFalse();
	}



	renderList() {
		if (this.props.feedback > [0]) {

			// building a list
			const renderList = this.props.feedback.map((item, i) => {
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


	render() {
		// checking the props
		
			//<Loader Loaded={this.props.Loaded} className="loader">

			return (
				
					<div className="col-xs-12 text-center">
						<h1>Inbox</h1>
						<Accordion>
							{this.renderList()}
						</Accordion>
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
