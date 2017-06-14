// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { sendFeedbackDrillsMessage } from '../../actions/Feedback/send_feedback_message_drills_action';
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';



class DrillsFeedbackModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Id: this.props.id,
			Feedback: "",
			CourseDrillId: "",
			Passed: ''

		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleInputChange(e) {
		// handling the 
		const value = e.target.value;
		const name = e.target.name;
		if (this.props.hasOwnProperty("DrillsReportId")) {
			this.setState({
				Feedback: value,
				CourseDrillId: this.props.DrillsReportId
				
			});


		} else {
			this.setState({
				Feedback: value,
				CourseDrillId: this.props.DrillsReportId
			});
		}


	}



	handleSubmit(event) {
		event.preventDefault();
		console.log(event.target)

		// calling the action
		sendFeedbackDrillsMessage(this.state);
		// clearing the text area.

		

		let url = '';
		if (this.props.hasOwnProperty("DrillsReportId")) {
			console.log("it hit");
			url = `/SPA/getDrillsReport?studentId=${this.props.id}`;
		} else url = `/SPA/getDrillsReport?studentId=${this.props.id}`;


		// calling the action
		resultsInstructorViewAction(url);


		this.setState({
			Feedback: ''
		});

		// hiding the modal
		this.props.toggleModal();
	}


	handleClick() {
		var element = document.getElementsByName("check");
		

		if (element[0].checked == true) {
			console.log(true)
			this.setState({
				Passed: element[0].checked
			});
		} else {
			this.setState({
				Passed: element[0].checked
			});
		}

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

								value={this.state.Feedback}
								onChange={this.handleInputChange}
							/>
						
						<div className="form-group">
								<div className="radio">
									<label>
										<input type="radio" name="check" onClick={this.handleClick} value="passed" required />
									Passed
								</label>
							</div>

							<div className="radio">
									<label>
										<input type="radio" name="check" onClick={this.handleClick} value="failed" required />
										Failed
									</label>
							</div>
						</div>
							</FormGroup>



	

					</Modal.Body>
					<Modal.Footer>
						<Button bsStyle="info" onClick={this.props.toggleModal}>Close</Button>
						<Button bsStyle="info" type="submit" id={this.props.DrillsReportId} onSubmit={this.handleSubmit} >Send</Button>
					</Modal.Footer>
				</form>
			</Modal>

		);


	}


}


export default DrillsFeedbackModal;