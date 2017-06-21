// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// action
import { fetchProgress } from "../../actions/Progress/progress_action";
// component
import ProgressBar from './ProgressBar';
import Loader from "../../components/loader/loader";
import { loadedFalse } from "../../actions/Loader/loaded_false_action";

class Progress extends Component {
    constructor(props) {
        super(props);

    }

   
	componentDidMount() {

		// calling the action
		this.props.fetchProgress();

		// Loaded false
		//this.props.loadedFalse();
	}

	componentWillMount() {

		// Begin loader animation
		this.props.loadedFalse();
	}


	// function to render total course progress
	renderTotalProgress() {
		if (this.props.courseProgress != null) {
			const currentCourse = this.props.courseProgress.CurrentCourse[0];
			const courses = this.props.courseProgress.CoursePage

			let doneDays = 0;

			for (let i = 0; i < currentCourse.CoursePosition - 1; i++) {
				doneDays += courses[i].DaysToComplete;
			}

			const coursePercentToTotal = (currentCourse.DaysToComplete / currentCourse.TotalDays) * 100;
			const donePercentToTotal = Math.round((currentCourse.PagePercent * coursePercentToTotal) / 100);
			const totalDonePercent = Math.round((doneDays / currentCourse.TotalDays) * 100 + donePercentToTotal);
			
			return (
				<ProgressBar
					name={"Boot Camp"}
					percentDone={totalDonePercent}
					percentShouldHaveDone={currentCourse.PercentDone} />
			);



		}


	}

	// function to build a list of individual course progress bars.
	renderCourseProgress() {
		if (this.props.courseProgress != null) {
			
			const currentCourse = this.props.courseProgress.CurrentCourse[0];
			const courses = this.props.courseProgress.CoursePage;
			let daysUsed = currentCourse.DaysUsed;
			let courseProgress = [];
			let doneDays = 0;
			let daysUsedPercent = 0;
			let percent = 0;
			
			let count = 0
			for (count = 0; count <= currentCourse.CoursePosition - 1; count++) {

				doneDays += courses[count].DaysToComplete;				
				
				(daysUsed >= courses[count].DaysToComplete)? daysUsedPercent = 100
				:daysUsedPercent = Math.round((daysUsed / courses[count].DaysToComplete) * 100);

				(courses[count].CourseName == currentCourse.CourseName)? percent = currentCourse.PagePercent
				:percent = 100;				
				
				daysUsed -= courses[count].DaysToComplete;
				
				courseProgress.push([courses[count].CourseName, percent, daysUsedPercent])
				
			}

			while (daysUsed > 0) {
				percent = 0
				(daysUsed >= courses[count].DaysToComplete)? daysUsedPercent = 100
				:daysUsedPercent = Math.round((daysUsed / courses[count].DaysToComplete) * 100);

				daysUsed -= courses[count].DaysToComplete;
				courseProgress.push([courses[count].CourseName, percent, daysUsedPercent])

				count++;

			}
			
			return courseProgress.map((item, i) => {
				return (
					<div key={i}>
						<hr />
						<ProgressBar
							name={item[0]}
							percentDone={item[1]}
							percentShouldHaveDone={item[2]} />
					</div>
				);
			});

		}


	}

	


    // render function after checking the props availability.
    render() {

		if (this.props.courseProgress != null) {
			const data = this.props.courseProgress.CurrentCourse[0];
			const percentDone = Math.round((data.DaysUsed / data.TotalDays) * 100);


		}
			
			return (
				<Loader Loaded={this.props.Loaded} className="loader">
                <div className="container">
                    <div className="row">
						<div className="col-xs-12">
							                           
                            <div className="text-center">
                                <h1>Progress</h1>
							</div>
							<hr />
							{/* progress bar of the total course*/}
							{this.renderTotalProgress()}

							<hr />
							{/* calling the function to display the progress bars of the indiviadual courses.*/}
							{this.renderCourseProgress()}


							</div>
						</div>
				</div>
				</Loader>

            );

        
    }
}


function mapStateToProps(state) {
	return {
		courseProgress: state.Progress,
		Loaded: state.Loaded
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchProgress: fetchProgress,
		loadedFalse: loadedFalse,
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Progress);