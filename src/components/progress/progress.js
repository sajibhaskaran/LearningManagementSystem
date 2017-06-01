/// <reference path="../app.js" />
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
			console.log(this.props.courseProgress);
			

			const currentCourse = this.props.courseProgress.CurrCourse[0];
			const courses = this.props.courseProgress.PageCourse;
			let daysUsed = currentCourse.DaysUsed;
			let courseProgress = [];
			let doneDays = 0;
			//let totalDays = 0;
			//for(let i in courses){ totalDays += courses[i].dComplete;}
			for(let i = 0; i < currentCourse.coursePosition-1; i++){
				doneDays += courses[i].dComplete;
			}

			if(daysUsed > doneDays){
			
				let count = 0;
				let percent = 0;
				
				while (daysUsed > courses[count].dComplete){

					daysUsed -= courses[count].dComplete;

					if(count < currentCourse.coursePosition - 1) percent = 100;
					else if(count == currentCourse.coursePosition - 1) percent = currentCourse.PagePercent;
					else percent = 0;

					courseProgress.push(courses[count].cName, percent, 100)
					count++;

				
				}

				console.log(courseProgress, daysUsed, doneDays, count)
			
			}



			/*
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
				let percentDone = 0;
				if (daysStudyDone <= courseDays[count]) {
					percentDone = Math.round((daysStudyDone / courseDays[count]) * 100);
				} else percentDone = 100;

				daysStudyDone -= courseDays[count]

				courses.push([this.props.courseProgress.AllCourses[count], percentDone, percent]);
				count++

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
				}


			}



			// returning a list of course progress bars
			return courses.map((course, i) => {
				return <ProgressBar key={i} name={course[0]} percentDone={course[1]} percentShouldHaveDone={course[2]} />
			});
		}

		*/

		}
	}
	totalCourse(){
	
		if(this.props.courseProgress != null){
		
			const currentCourse = this.props.courseProgress.CurrCourse[0];
			const courses = this.props.courseProgress.PageCourse;
			let doneDays = 0;
			//let totalDays = 0;
			//for(let i in courses){ totalDays += courses[i].dComplete;}
			for(let i = 0; i < currentCourse.coursePosition-1; i++){
				doneDays += courses[i].dComplete;
			}
			const coursePercentToTotal = (currentCourse.dayToComplete/currentCourse.TotalDays)*100;
			const donePercentToTotal = Math.round((currentCourse.PagePercent*coursePercentToTotal)/100);
			const totalDonePercent = Math.floor((doneDays/currentCourse.TotalDays)*100 + donePercentToTotal);
			console.log(doneDays, coursePercentToTotal, donePercentToTotal, totalDonePercent);
			return(
				<ProgressBar
							name={"Boot Camp"}
							percentDone={totalDonePercent}
							percentShouldHaveDone={currentCourse.PercentDone} />
				
				);
		}
	



}

renderCourseProgress(){
	if(this.props.courseProgress != null) {

		const currentCourse = this.props.courseProgress.CurrCourse[0];
		const courses = this.props.courseProgress.PageCourse;

		let totalDays = currentCourse.TotalDays;

		//const progress = courses.map((course, i) => {
				
		
		//});

		for(let i=0; i < courses.length; i++){
			totalDays -= courses[i].dComplete
		
		}
    
	}


}
	



    // render function after checking the props availability.
    render() {
    	if(this.props.courseProgress != null){
    		const data= this.props.courseProgress.CurrCourse[0];
    		const percentDone = Math.round((data.DaysUsed/data.TotalDays)*100);
    		console.log(percentDone);
			console.log(data.PercentDone)
    	
    	}
		//const percentDone = this.props.courseProgress === null ?
		//	0 : this.props.courseProgress.Data.percentActuallyDone;
		//const percentShouldHaveDone = this.props.courseProgress === null ?
		//	0 : this.props.courseProgress.Data.percentShouldHaveDone;
			
			return (
				<Loader Loaded={this.props.Loaded} className="loader">
                <div className="container">
                    <div className="row">
						<div className="col-xs-12">
							                           
                            <div className="text-center">
                                <h1>Progress</h1>
							</div>
							<hr />
							{this.totalCourse()}
							{/* progress bar of the total course*/}
							{/*<ProgressBar
								name={"Boot Camp"}
								percentDone={percentDone }
								percentShouldHaveDone={percentShouldHaveDone} />*/}

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