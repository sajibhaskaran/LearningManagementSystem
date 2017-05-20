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

	courseList() {
		// doing the calculation to figure out the progress in individual courses.

		if (this.props.courseProgress != null) {
			let count = 0;

			let daysUsed = this.props.courseProgress.Data.daysUsed;
			let daysStudyDone = this.props.courseProgress.Data.daysActuallyDone;
			let courseDays = this.props.courseProgress.CourseDays;
			let courses = [];



			this.props.courseProgress.CoursesDone.push(this.props.courseProgress.CurrentCoursePercent);
			if (daysUsed >= daysStudyDone) {
				while (daysUsed > courseDays[count]) {

					daysUsed -= courseDays[count];
					var temp = 0;
					if (typeof this.props.courseProgress.CoursesDone[count] === 'string') {
						var temp = 100;
					}
					else if (typeof this.props.courseProgress.CoursesDone[count] === 'number') {
						temp = this.props.courseProgress.CoursesDone[count];
					}

					courses.push([this.props.courseProgress.AllCourses[count], temp, 100]);
					count++;
				}

				let percent = Math.round((daysUsed / courseDays[count]) * 100);

				courses.push([this.props.courseProgress.AllCourses[count], this.props.courseProgress.CoursesDone[count], percent]);

			}
			else {
				while (daysUsed >= courseDays[count]) {


					daysUsed -= courseDays[count];
					daysStudyDone -= courseDays[count];
					//console.log(daysUsed, daysStudyDone);
					var temp = 0;
					if (typeof this.props.courseProgress.CoursesDone[count] === 'string') {
						var temp = 100;
					}
					else if (typeof this.props.courseProgress.CoursesDone[count] === 'number') {
						temp = this.props.courseProgress.CoursesDone[count];
					}

					courses.push([this.props.courseProgress.AllCourses[count], temp, 100]);
					count++;
				}

				//console.log(daysStudyDone, this.props.courseProgress.AllCourses[count],courseDays[count], daysUsed);
				let percent = Math.round((daysUsed / courseDays[count]) * 100);
				let percentDone = 0;
				if (daysStudyDone <= courseDays[count]) {
					percentDone = Math.round((daysStudyDone / courseDays[count]) * 100);
				} else percentDone = 100;

				daysStudyDone -= courseDays[count]

				courses.push([this.props.courseProgress.AllCourses[count], percentDone, percent]);
				count++
				//console.log(daysStudyDone, this.props.courseProgress.AllCourses[count], courseDays[count], daysUsed);

				while (daysStudyDone >= courseDays[count]) {



					daysStudyDone -= courseDays[count];
					var temp = 0;
					if (typeof this.props.courseProgress.CoursesDone[count] === 'string') {
						var temp = 100;
					}
					else if (typeof this.props.courseProgress.CoursesDone[count] === 'number') {
						temp = this.props.courseProgress.CoursesDone[count];
					}

					courses.push([this.props.courseProgress.AllCourses[count], temp, 0]);
					count++;
					//console.log(daysStudyDone, this.props.courseProgress.AllCourses[count], courseDays[count], daysUsed);
				}


			}



			// returning a list of course progress bars
			return courses.map((course, i) => {
				return <ProgressBar key={i} name={course[0]} percentDone={course[1]} percentShouldHaveDone={course[2]} />
			});
		}

	}
	



    // render function after checking the props availability.
    render() {

		const percentDone = this.props.courseProgress === null ?
			0 : this.props.courseProgress.Data.percentActuallyDone;
		const percentShouldHaveDone = this.props.courseProgress === null ?
			0 : this.props.courseProgress.Data.percentShouldHaveDone;
			
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
							<ProgressBar
								name={"Boot Camp"}
								percentDone={percentDone }
								percentShouldHaveDone={percentShouldHaveDone} />

							<hr />
							{/* calling the function to display the progress bars of the indiviadual courses.*/}
							{this.courseList()}


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