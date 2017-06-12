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
import WeeklyFeedbackModal from '../../components/Feedback/feedback_modal_weekly';





class WeeklyReportResult extends Component {
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

        // for rereshing the page
        if (this.state.isOpen == true) {
            // getting the user info from the props/params
            const userInfo = this.props.match.params.value.split(',');
            // url to pass to the end point
            const url = `/SPA/getWeeklyReport?Id=${userInfo[1]}`;
            // calling the action
            this.props.resultsInstructorViewAction(url);
            // for forcing the component to re-render
            this.setState({
                test: this.state.test++
            })
            //this.forceUpdate();
            this.props.loadedFalse();
        }
    }

	componentDidMount() {
		// getting the user info from the props/params
		const userInfo = this.props.match.params.value.split(',');
		// url for the getWeeklyReport
		const url = `/SPA/getWeeklyReport?Id=${userInfo[1]}`;

		this.props.resultsInstructorViewAction(url);
	}

	componentWillMount() {
	    // Begin the loader animation
	    this.props.loadedFalse();
	}


    // function for building the filtered renderList
	renderList() {
        
	    // checking to see if the data exists
	    if (this.props.resultsInstructorView > [0]) {
	        const renderList = this.props.resultsInstructorView.map((item, i) => {
               // console.log(item)
	            if (item.Feedbacks.length == 0) {
	                return (
                        // Key for error in console due to mapping
                        <div key={i}>
                            <hr className="style-two" />
                            <h4>Date Submitted: </h4><p>{item.Date}</p>
                            <h5>Course Position: </h5><p>{item.CoursePosition}</p>
                            <h5>Need Help: </h5><p>{item.NeedHelp}</p>
                            <h5>Materials and Supplies Needed: </h5><p>{item.MaterialsAndSupplies}</p>
                            <h5>Meetups: </h5><p>{item.Meetups}</p>
                            <h5>Positive Experiences: </h5><p>{item.Positives}</p>
                            <h5>Complaints: </h5><p>{item.Complaints}</p>
                            <h5>Hours Studied: </h5><p>{item.HoursStudied}</p>
                            <h5>Job Search: </h5><p>{item.JobSearch}</p>
                            <h5>Referral: </h5><p>{item.Referral}</p>
                            <h5>Miscellaneous: </h5><p>{item.Miscellaneous}</p>


                        <button type="button" className="btn btn-info btn-lg" onClick={this.toggleModal} id={item.WeeklyReportId}>
                                    Give Feedback
                        </button>
                        </div>
            );
	        }
	        });
	        return renderList;
	}
}


// function for building all the past weeklyreports
renderAllList() {
    
    if (this.props.resultsInstructorView > [0]) {
        
        // building the already responded daily reports
        const renderAllList = this.props.resultsInstructorView.map((item, i) => {
            console.log(item.Feedbacks);
            if (item.Feedbacks.length > 0) {
						
                return (

                    <Panel key={i} header={item.Date} eventKey={i} bsStyle="primary" className="text-center">
                        <hr className="style-two" />
                        <div className="text-left">
                            <h6><strong>Date Submitted :</strong> {item.Date}</h6>
                            <h6><strong>Course Position : </strong>{item.CoursePosition}</h6>
                            <h6><strong>Need Help : </strong>{item.NeedHelp}</h6>
                            <h6><strong>Materials and Supplies :</strong> {item.MaterialsAndSupplies}</h6>
                            <h6><strong>Positives : </strong>{item.Positives}</h6>
                            <h6><strong>Complaints :</strong> {item.Complaints}</h6>
                            <h6><strong>Hours Studied :</strong> {item.HoursStudied}</h6>
                            <h6><strong>Job Search :</strong> {item.JobSearch}</h6>
                            <h6><strong>Referral :</strong> {item.Referral}</h6>
                            <h6><strong>Miscellaneous :</strong> {item.Miscellaneous}</h6>
                            <h6><strong>Instructor Feedback : </strong><mark>{item.Feedbacks[0].Content}</mark></h6>
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
						<h1>Weekly Reports</h1>
						<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[2]}</h5>
						
					</div>

					<div className="col-sm-12 text-left">

	{this.renderList()}


                        <hr className="style-two" />
							<h2 className="text-center">Past Reports</h2>
							
							<Accordion>
	{this.renderAllList()}
							</Accordion>
							<WeeklyFeedbackModal
								show={this.state.isOpen}
								toggleModal={this.toggleModal}
								name={this.props.match.params.value.split(',')[0]}
                                id={this.props.match.params.value.split(',')[1]}
                                WeeklyReportId={this.state.tempId}

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


export default connect(mapStateToProps, mapDispatchToProps)(WeeklyReportResult);