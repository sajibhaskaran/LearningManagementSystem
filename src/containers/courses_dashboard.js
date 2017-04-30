import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import ComputerBasicsBox from '../components/courseboxes/computer_basics_box';
//import OverviewOfSoftwareDevelopmentBox from '../components/courseboxes/overview_box';
//import VersionControlBox from '../components/courseboxes/version_control_box';
//import HtmlCssBox from '../components/courseboxes/html_css_box';
//import SQLBox from '../components/courseboxes/sql_box';
//import JavaScriptBox from '../components/courseboxes/javascript_box';
//import VisualStudioBox from '../components/courseboxes/visual_studio_box';
//import CSharpBox from '../components/courseboxes/c_sharp_box';
//import ProjectManagementBox from '../components/courseboxes/project_management_box';
//import LiveProjectBox from '../components/courseboxes/live_project_box';
//import JobPlacementBox from '../components/courseboxes/job_placement_box';
// import BasicCourse from '../components/courses/computer_basic_course';

// Loader
import Loader from '../components/loader/loader';

// Actions
import { fetchStudentCourses } from '../actions/Student Courses/fetch_courses';
import { selectStudentCourseId } from '../actions/Student Courses/select_student_course_id_action';

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

            // Map over props and populate our page based on these props
            const courseMap = this.props.StudentCoursesList.map((course) => {

                // Get initials
                var matches = course.CourseName.match(/\b(\w)/g);
                const initials = matches.join('');

                preload.src = course.ImageUrl;

                
                return (
                    <Link to={"/CourseView/:" + course.CourseId + "/:"} key={course.CourseId}>
                         { /*
                        <div className="col-sm-6 col-12 page">
                            <div className="card">
                                <img className="card-img-top img-responsive" src={course.ImageUrl} alt="Card image cap" />
                                <div className="card-block spaCourseBox">
                                    <p className="SPAcourseText"><i className="fa fa-map-marker"></i>{initials}<i className="SPAcourseDetails" /><i className="fa fa-clock-o "></i>{course.DaysToComplete} Days</p>
                                    <p className="card-text SPAcourseText">{course.CourseDescription}</p>
                                </div>
                            </div>
                        </div>
                        */}


                                    
                        <div onClick={() => this.props.selectStudentCourseId(course.CourseId)} className="course-list col-sm-6 course-box spaCourseBox">
                            <div className="course-media">
                                <img src={course.ImageUrl} className="img-responsive course-img" alt="" />
                            </div>
                            <div className="course-detail">
                                <h4 className="heading">{course.CourseName}</h4>
                                <ul className="course-features">
                                    <li><i className="fa fa-map-marker"></i>{initials}</li>
                                    <li><i className="fa fa-clock-o"></i>{course.DaysToComplete} Days</li>
                                </ul>
                                <p className="brief">{course.CourseDescription}</p>
                            </div>
                        </div>
                        
                    </Link>
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