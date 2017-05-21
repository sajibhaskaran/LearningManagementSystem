// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';




class ModalComponent extends Component {




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
				
				<Modal.Body>
					<form>
						<FormGroup controlId="formControlsTextarea" >
							 
							<FormControl componentClass="textarea" placeholder="message..." style={{ height: 150 }}/>
						</FormGroup>
					
						
					</form>
					
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="info" onClick={this.props.toggleModal}>Close</Button>
					<Button bsStyle="info" >Send</Button>
				</Modal.Footer>
			</Modal>

		);


	}


}


export default ModalComponent;