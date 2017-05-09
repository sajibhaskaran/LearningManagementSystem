// libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { courseDrillAction } from '../../actions/Results/course_drill_action';
// importing components



class CourseDrill extends Component{

	componentDidMount() {
		
		const url = `/SPA/getDrills?courseId=${this.props.match.params.value}`;
		this.props.courseDrillAction(url);
	}



	render() {

		if (this.props.courseDrill > [0]) {
			console.log(this.props.courseDrill);

			const renderList = this.props.courseDrill.map((item, i) => {
				return (

					<div key={i}>
						<hr className="style-two" />
						<h4>Date Submitted: </h4><p>{item.Submitted}</p>
						<h5>Page Number: </h5><p>{item.PageNumber}</p>
						<h5>Title: </h5><p>{item.PageTitle}</p>
						<h5>Submission Text: </h5><p>{item.SubmissionText}</p>
						<h5>Passed: </h5><p>{item.Passed}</p>
						


					</div>
				);


			});


			return (

				<div className="col-xs-12">
					<h1 className="text-center">Course Drill </h1>
					
					<p>&nbsp;</p>
					{renderList}


				</div>


			);
		} else {
			console.log(this.props.courseDrill);
			return (<h4>No drills yet.</h4>);
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


export default connect(mapStateToProps, mapDispatchToProps)(CourseDrill);