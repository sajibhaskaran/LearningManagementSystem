// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import { feedbackAction } from '../../actions/Feedback/get_feedback_action';


class Feedback extends Component {

	componentDidMount() {
		
		// calling the action
		this.props.feedbackAction();
	}


	render() {
		// checking the props
		if (this.props.feedback > [0]) {
			// building a list
			const renderList = this.props.feedback.map((item, i) => {
				return (

					<div key={i} className="text-left">
						<hr />
						<h4>Date: </h4><p>{item.Date}</p>
						<h5>Content: </h5><p>{item.Content}</p>

					</div>
				);


			});


			return (
				<div className="col-xs-12 text-center">
					<h1>Feedback</h1>

					{renderList}
				</div>
			);
		}
		else return <h3>No feedbacks yet.</h3>;

	}

}


function mapStateToProps(state) {
	return { feedback: state.Feedback };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		feedbackAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
