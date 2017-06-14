// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Accordion } from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';
import { loadedFalse } from "../../actions/Loader/loaded_false_action";

// modal 
import DrillsFeedbackModal from '../../components/Feedback/feedback_modal_drills';



class DrillReportResultsInstructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            tempId: '',
            test: 0
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    // function for toggling modal
    toggleModal(e) {
        let id = ''
        if (typeof e == 'undefined') {
            this.setState({
                isOpen: !this.state.isOpen,
                tempId: id
            });
        } else {
			id = e.target.id
			
            this.setState({
                isOpen: !this.state.isOpen,
                tempId: e.target.id
            });
        }

        // for refreshing the page
        if (this.state.isOpen == true) {
            // getting the user info from the props/params
            const userInfo = this.props.match.params.value.split(',');
            // url to pass to the end point
		const url = `/SPA/GetDrillsInstructorView?studentId=${userInfo[1]}`;
            // calling the action
            this.props.resultsInstructorViewAction(url);
            // for forcing the component to re-render
            this.setState({
                test: this.state.test++
            })
            this.props.loadedFalse();
        }
    }

    componentDidMount() {
        //getting the user info from the props/params

        const userInfo = this.props.match.params.value.split(',');
        // url for the getDrillReport
		const url = `/SPA/GetDrillsInstructorView?studentId=${userInfo[1]}`;

        this.props.resultsInstructorViewAction(url);
    }

    componentWillMount() {
        // Begin the loader animation
        this.props.loadedFalse();
    }


	renderList() {

		// checking to see if data exists
		if (this.props.resultsInstructorView > [0]) {
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				
				if (item.Feedback == null) {
					return (
						// Key for error in console due to mapping
						<div key={i}>
							<hr className="style-two" />
							<h4> Page Number: </h4><p>{item.PageNumber}</p>
							<h5> Page Title: </h5><p>{item.PageTitle}</p>
							<h5> Submission Text: </h5><p>{item.SubmissionText}</p>
							<h5> Submitted: </h5><p>{item.Submitted}</p>
							<h5> Passed: </h5><p>{item.Passed}</p>


							<button type="button" className="btn btn-info btn-lg" onClick={this.toggleModal} id={item.DrillReportId}>
								Give Feedback
                        </button>


						</div>
					);

				}
			});
			return renderList
		} else return (
			<div>
				<hr className="style-two" />
				<h5 className="text-center">No Drills yet.</h5>
			</div>

		);
	}

	// function for building all the past dailyreports
	renderAllList() {

		if (this.props.resultsInstructorView > [0]) {

			// building the already responded weekly reports
			const renderAllList = this.props.resultsInstructorView.map((item, i) => {
				
				if (item.Feedback !== null) {

					return (

						<Panel key={i} header={item.Submitted} eventKey={i} bsStyle="primary" className="text-center">
							<hr className="style-two" />
							<div className="text-left">
								<h6> Page Number: </h6><p>{item.PageNumber}</p>
								<h6> Page Title: </h6><p>{item.PageTitle}</p>
								<h6> Submission Text: </h6><p>{item.SubmissionText}</p>
								<h6> Submitted: </h6><p>{item.Submitted}</p>
								<h6> Passed: </h6><p>{item.Passed}</p>
								<h6><strong>Instructor Feedback : </strong><mark>{item.Feedback}</mark></h6>
							</div>
						</Panel>
					);
				} 
	});

		return renderAllList;
		} 
}

	render() {
		return (
			<Loader Loaded={this.props.Loaded} className="loader">
				<div className="container text-center">

				<div className="row">
					<h1>Drills Reports</h1>
					<h3>Student Name: {this.props.match.params.value.split(',')[0]}</h3>
					<h5>{this.props.match.params.value.split(',')[2]}</h5>
				</div>

				<div className="col-sm-12 text-left">
					{this.renderList()}

					<hr className="style-two" />
					<h2 className="text-center">Past Reports</h2>

					<Accordion>
						{this.renderAllList()}
					</Accordion>

					<DrillsFeedbackModal
						show={this.state.isOpen}
						toggleModal={this.toggleModal}
						name={this.props.match.params.value.split(',')[0]}
						id={this.props.match.params.value.split(',')[1]}
						DrillsReportId={this.state.tempId}

					/>

				</div>

				</div>
			</Loader>
		
			);
	}
}


function mapStateToProps(state) {
	return {
		resultsInstructorView: state.ResultsInstructorView,
		Loaded: state.Loaded
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		resultsInstructorViewAction,
		loadedFalse
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DrillReportResultsInstructor);