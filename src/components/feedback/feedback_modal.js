// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { sendFeedbackMessage } from '../../actions/Feedback/send_feedback_message_action';
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';



class FeedbackModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Id: this.props.id,
			Content: "",
			DailyReportId: ""

		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

		handleInputChange(e) {
			// handling the 
			const value = e.target.value;
			const name = e.target.name;

			this.setState({
				Content: value,
				DailyReportId: this.props.dailyReportId
			});
	}



	handleSubmit(event) {
		event.preventDefault();
		
		
		this.setState({
			DailyReportId: this.props.dailyReportId
		});
		
		// calling the action
		sendFeedbackMessage(this.state);
		// clearing the text area.

		//console.log("id :", this.props.id);
		
		const url = `/SPA/getDailyReport?Id=${this.props.id}`;
		// calling the action
		resultsInstructorViewAction(url);


		this.setState({
			Content: ''
		});

		// hiding the modal
		this.props.toggleModal();
	}


	render() {

		

		// styles for the modal.
		const modalStyle = {
			position: 'fixed',
			zIndex: 1040,
			top: 0, bottom: 0, left: 0, right: 0
		};

		const backdropStyle = {

			zIndex: 'auto',
			backgroundColor: '#000',
			opacity: 0
		};
		// checking to see if the props exists
		if (!this.props.show) {

			return null;
		}
		
		return (
			<Modal show={this.props.show}
				onHide={this.props.toggleModal}
				style={modalStyle}
				backdropStyle={backdropStyle}>
				<Modal.Header>
					<Modal.Title id="title"><span id="title1">Message to: {this.props.name}</span></Modal.Title>
				</Modal.Header>
				<form onSubmit={this.handleSubmit}>
				<Modal.Body>
					
						<FormGroup controlId="formControlsTextarea" >

							<FormControl
								componentClass="textarea"
								placeholder="message..."
								style={{ height: 150 }}

								value={this.state.Content}
								onChange={this.handleInputChange}
							/>
						</FormGroup>
										

				</Modal.Body>
				<Modal.Footer>
						<Button bsStyle="info" onClick={this.props.toggleModal}>Close</Button>
						<Button bsStyle="info" type="submit" id={this.props.dailyReportId} onSubmit={this.handleSubmit} >Send</Button>
				</Modal.Footer>
					</form>
			</Modal>

		);


	}


}


export default FeedbackModal;