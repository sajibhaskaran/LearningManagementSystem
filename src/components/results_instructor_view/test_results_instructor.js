// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Loader
import Loader from '../../components/loader/loader';

// actions
import { resultsInstructorViewAction } from '../../actions/Results/results_instructor_view_action';



class InstructorTestResult extends Component {

	componentDidMount() {
		const userInfo =  this.props.match.params.value.split(',');
		//console.log(userInfo);
		const url = `/SPA/GetTestResults?courseId=${userInfo[0]}&Id=${userInfo[1]}`;
		this.props.resultsInstructorViewAction(url);
	}



	render() {

		if (this.props.resultsInstructorView > [0]) {
			//console.log(this.props);

			const renderList = this.props.resultsInstructorView.map((item, i) => {
				return (

					<div key={i}>
						<hr className="style-two" />
						<h4> Question Number: </h4><p>{item.QuestionNumber}</p>
						<h5> Question: </h5><p>{item.Question}</p>
						<h5> Answer: </h5><p>{item.Answer}</p>
						<h5> Result: </h5><p>{item.Result}</p>





					</div>
				);


			});


			return (
				<div className="container text-center">

					<div className="row">
						<h1>Test Results</h1>
						<h3>Student Name: </h3><h5>{this.props.match.params.value.split(',')[2]}</h5>

					</div>

					<div className="col-sm-12 text-left">

						{renderList}

					</div>

				</div>

			);
		} else {
			return (<h4>No tests yet.</h4>);
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


export default connect(mapStateToProps, mapDispatchToProps)(InstructorTestResult);