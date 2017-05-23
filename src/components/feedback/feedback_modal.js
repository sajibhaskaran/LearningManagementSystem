// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { sendFeedbackMessage } from '../../actions/Feedback/send_feedback_message_action';




class FeedbackModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Message: "",

		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

		handleInputChange(e) {
			
			const value = e.target.value;
			const name = e.target.name;

			this.setState({
				Message: value
			});
		}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.Message);

		sendFeedbackMessage(this.state);
		this.props.toggleModal();
	}


	render() {

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
								
								value={this.state.Message}
								onChange={this.handleInputChange}
							/>
						</FormGroup>


					

				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="info" onClick={this.props.toggleModal}>Close</Button>
					<Button bsStyle="info" type="submit" onSubmit={this.handleSubmit} >Send</Button>
				</Modal.Footer>
					</form>
			</Modal>

		);


	}


}


export default FeedbackModal;