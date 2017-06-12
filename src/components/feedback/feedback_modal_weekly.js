﻿// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { sendFeedbackWeeklyMessage } from '../../actions/Feedback/send_feedback_message_weekly_action';
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';



class WeeklyFeedbackModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: this.props.id,
            Content: "",
            WeeklyReportId: ""

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        // handling the 
        const value = e.target.value;
        const name = e.target.name;
        if(this.props.hasOwnProperty("WeeklyReportId")) {
            this.setState({
                Content: value,
                WeeklyReportId: this.props.WeeklyReportId
            });


        }else{
            this.setState({
                Content: value,
                WeeklyReportId: this.props.WeeklyReportId
            });
        }

			
    }



    handleSubmit(event) {
        event.preventDefault();
		
		
        // calling the action
        sendFeedbackWeeklyMessage
            (this.state);
        // clearing the text area.

        console.log("id :", this.props.id);
		
        let url='';
        if(this.props.hasOwnProperty("WeeklyReportId")){
            console.log("it hit");
            url = `/SPA/getWeeklyReport?Id=${this.props.id}`;
        }else url = `/SPA/getDailyReport?Id=${this.props.id}`;
		
		
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
            <Button bsStyle="info" type="submit" id={this.props.WeeklyReportId} onSubmit={this.handleSubmit} >Send</Button>
    </Modal.Footer>
        </form>
</Modal>

);


    }


}


export default WeeklyFeedbackModal;