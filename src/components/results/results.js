﻿import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Loader
import Loader from '../../components/loader/loader';

// Actions
import { fetchStudentCourses } from '../../actions/Student Courses/fetch_courses';
import { selectStudentCourseId } from '../../actions/Student Courses/select_student_course_id_action';

// Components
import ResultsButton from '../../components/results/drillButton';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: false
		};

	}

	

	mapCourseViews() {

		if (this.props.StudentCoursesList !== null) {

			// Preload images
			var preload = new Image();
			const picArray = ["cb.png", "osd.png", "versioncontrol.png", "html.png", "sql.png", "js.png", "visualstudio.png", "csharp.png", "pm.png", "liveproject.png", "job.png"];
			const path = "/images/resultsIMG/";

			// Map over props and populate our page based on these props
			const courseMap = this.props.StudentCoursesList.map((course, i) => {
				
				                
				return (               
                  
                            
                        <div className="col-sm-4 col-12 page" key={i}>
                            <div className="card" style={{height: "auto", paddingBottom: "5px"}}>
                                <img className="card-img-top img-responsive" src={path + picArray[i]} alt="Card image cap" />
                                <div className="card-block spaCourseBox">
									<div className="reportButtons text-center">
										<ResultsButton name = {"Drill"} courseId= {course.CourseId}/>
										<ResultsButton name = {"Essay"} courseId= {course.CourseId}/>
										<ResultsButton name = {"Daily"} courseId= {course.CourseId}/>
										<ResultsButton name = {"Weekly"} courseId= {course.CourseId}/>
									</div>
                                </div>
                            </div>
                        </div>
                        
                      

                   
                
            
                );
                                });

	return courseMap;

	} else {
	return "";
	}
	}

componentDidUpdate(prevProps, prevState) {

		// set loaded to true
		if (this.state.Loaded === false) {

			this.setState({ Loaded: true });
		}

		$(".spaCourseBox").matchHeight();
	}

	componentDidMount() {
		// Make get request to return a list of all the courses in our reducer    	
		this.props.fetchStudentCourses();
	}

	render() {

		return (
            <Loader Loaded={this.state.Loaded} className="loader">
                <div className="row">

                    <div className="col-md-12">
            {this.mapCourseViews()}
                    </div>
            	</div>
            </Loader>
        );
            }
}

// Bind actions to redux
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchStudentCourses: fetchStudentCourses,
		selectStudentCourseId: selectStudentCourseId
	}, dispatch);
}

// Allow this component to access redux store
function mapStateToProps(state) {
	return {
		StudentCoursesList: state.StudentCoursesList
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

