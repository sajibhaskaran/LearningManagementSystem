// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class TestResults extends Component {

	componentDidMount() {

		const url = `/SPA/GetTestResults?courseId=${this.props.match.params.value}`;
		this.props.courseDrillAction(url);
	}



	render() {

		if (this.props.courseDrill > [0]) {
			

			const renderList = this.props.courseDrill.map((item, i) => {
				return (

					<div key={i}>
						<hr />
						<h4> Question Number: </h4><p>{item.QuestionNumber}</p>
						<h5> Question: </h5><p>{item.Question}</p>
						<h5> Answer: </h5><p>{item.Answer}</p>
						<h5> Result: </h5><p>{item.Result}</p>
						
						



					</div>
				);


			});


			return (

				<div className="col-xs-12">
					<h1 className="text-center">Test Results </h1>

					<p>&nbsp;</p>
					{renderList}


				</div>


			);
		} else {
			return (<h4>No tests yet.</h4>);
		}

	}

}

function mapStateToProps(state) {
	return { courseDrill: state.CourseDrill };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		courseDrillAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TestResults);