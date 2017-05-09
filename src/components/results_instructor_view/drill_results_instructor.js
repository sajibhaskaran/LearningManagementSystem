// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';




class InstructorDrillResult extends Component {

	componentDidMount() {
		//getting the user info from the props/params
		
		const userInfo = this.props.match.params.value.split(',');
		// making url for the endpoint
		const url = `/SPA/GetDrills?courseId=${userInfo[0]}&studentId=${userInfo[1]}`;
		// calling the action
		this.props.resultsInstructorViewAction(url);
	}



	render() {

		// checking to see if data exists
		if (this.props.resultsInstructorView > [0]) {
			

			const renderList = this.props.resultsInstructorView.map((item, i) => {
				
				return (

					<div key={i}>
						<hr className="style-two" />
						<h4> Page Number: </h4><p>{item.PageNumber}</p>
						<h5> Page Title: </h5><p>{item.PageTitle}</p>
						<h5> Submission Text: </h5><p>{item.SubmissionText}</p>
						<h5> Submitted: </h5><p>{item.Submitted}</p>
						<h5> Passed: </h5><p>{item.Passed}</p>





					</div>
				);


			});


			return (

				<div className="container text-center">

					<div className="row">
						<h1>Drill Results</h1>
						<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[2]}</h5>

					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);
		} else {
			return (<h4>No drills yet.</h4>);
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


export default connect(mapStateToProps, mapDispatchToProps)(InstructorDrillResult);