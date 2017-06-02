// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Panel, Accordion} from 'react-bootstrap';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';

// model
import FeedbackModal from '../../components/Feedback/feedback_modal';




class DailyReportResult extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Loaded: false,
			isOpen: false,
			tempId: ''
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	// function for toggling the modal
	toggleModal(e) {
		let id = ''
		if (typeof e == 'undefined') {
			this.setState({
				isOpen: !this.state.isOpen,
				tempId: id
			});

		}
		else {
			id = e.target.id
			this.setState({
				isOpen: !this.state.isOpen,
				tempId: e.target.id
			});



		}
		
		// for refreshing the page.
		if (this.state.isOpen == true) {

			// getting the user info from the props/params
			const userInfo = this.props.match.params.value.split(',');
			// url to pass to the end point
			const url = `/SPA/getDailyReport?Id=${userInfo[1]}`;
			// calling the action
			this.props.resultsInstructorViewAction(url);

		}

	}

	componentDidMount() {
		// getting the user info from the props/params
		const userInfo = this.props.match.params.value.split(',');
		// url to pass to the end point
		const url = `/SPA/getDailyReport?Id=${userInfo[1]}`;
		// calling the action
		this.props.resultsInstructorViewAction(url);
	}

	componentDidUpdate(prevProps, prevState) {

		// set loaded to true
		if (this.state.Loaded === false) {

			this.setState({ Loaded: true });
		}

		
	}


	render() {


		// checking to see if data exists
		if (this.props.resultsInstructorView > [0]) {

			// building the filtered daily reports
			const renderList = this.props.resultsInstructorView.map((item, i) => {
				if (item.Feedbacks.length == 0) {
					
					return (

						<div key={i}>
							<hr className="style-two" />
							<h6><strong>Date Submitted :</strong> {item.Date}</h6>
							<h6><strong>Course Position : </strong>{item.CoursePosition}</h6>
							<h6><strong>Feedback : </strong>{item.Feedback}</h6>
							<h6><strong>Positive Experiences :</strong>{item.PositiveExperiences}</h6>
							<h6><strong>Help Needed : </strong>{item.NeedHelp}</h6>
							<h6><strong>Hours Studied :</strong>{item.HoursStudied}</h6>


							<button type="button" className="btn btn-info btn-lg" onClick={this.toggleModal} id={item.DailyReportId}>
								Give Feedback
                        </button>
						</div>
					);
				}

			});

			
			// building the already responded daily reports
				const renderAllList = this.props.resultsInstructorView.map((item, i) => {
					if (item.Feedbacks.length > 0) {
						
						return (

							<Panel key={i} header={item.Date} eventKey={i} bsStyle="primary" className="text-center">
								<hr className="style-two" />
								<div className="text-left">
									<h6><strong>Date Submitted :</strong> {item.Date}</h6>
									<h6><strong>Course Position : </strong>{item.CoursePosition}</h6>
									<h6><strong>Feedback : </strong>{item.Feedback}</h6>
									<h6><strong>Positive Experiences :</strong> {item.PositiveExperiences}</h6>
									<h6><strong>Help Needed : </strong>{item.NeedHelp}</h6>
									<h6><strong>Hours Studied :</strong> {item.HoursStudied}</h6>
									<h6><strong>Instructor Feedback : </strong><mark>{item.Feedbacks[0].Content}</mark></h6>
								</div>

							</Panel>
						);
					}

				});


				return (
					<div className="container text-center">

						<div className="row">
							<h1>Daily Reports</h1>
							<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[0]}</h5>
						</div>

						<div className="col-sm-12 text-left">

							{renderList}

							<hr className="style-two" />
							<h2 className="text-center">Past Reports</h2>
							
							<Accordion>
								{renderAllList}
							</Accordion>
							<FeedbackModal
								show={this.state.isOpen}
								toggleModal={this.toggleModal}
								name={this.props.match.params.value.split(',')[0]}
								id={this.props.match.params.value.split(',')[1]}
								dailyReportId={this.state.testId}

							/>

						</div>

					</div>

				);


			} else {
				return (<h6>No daily reports yet</h6>)
			}


		}

	}


        function mapStateToProps(state) {
            return { resultsInstructorView: state.ResultsInstructorView };
        }

        function mapDispatchToProps(dispatch) {
            return bindActionCreators({
                resultsInstructorViewAction
            }, dispatch);
        }


export default connect(mapStateToProps, mapDispatchToProps)(DailyReportResult);