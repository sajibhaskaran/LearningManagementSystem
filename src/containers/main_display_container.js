// Library Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Route, Switch } from 'react-router-dom';

// General Function Imports
import toggleNavBar from "../functions/layout/hamburger_menu";

// Redux Action Imports
import { fetchCourseData } from "../actions/Course Designer/fetch_course_data";

// React Component Imports
import GetAvatar from '../containers/get_user_avatar'
import Inbox from '../containers/Inbox/inbox_container';
import StudentDashboard from '../containers/courses_dashboard';
import Main from '../containers/main';
import Instructor from '../containers/instructor_dashboard';
import Admin from '../containers/admin_dashboard';
import Progress from '../components/progress/progress';
import Results from '../components/results_student_view/results';
import CourseDrill from '../components/results_student_view/courseDrill';
import TestResults from '../components/results_student_view/test_results';
import DailyReportResult from '../components/results_student_view/daily_report_results';
import InstructorDailyReportResult from '../components/results_instructor_view/daily_report_results_instructor';
// For Instructor Navigation 
import InstructorDailyReports from '../components/instructor_daily_reports/instructor_daily_reports';
//
import InstructorWeeklyReportResult from '../components/results_instructor_view/weekly_report_results_instructor';
import InstructorTestResult from '../components/results_instructor_view/test_results_instructor';
import InstructorDrillResult from '../components/results_instructor_view/drill_results_instructor';

import WeeklyReportResult from '../components/weekly_survey/weekly_report_results';
import Feedback from '../components/feedback/feedback';
import Modal from '../components/Modal/modal';
import Testing from '../components/testing/testing';
import Resources from '../components/resources/resources';
import DailyReport from '../components/daily_report/daily_report_form';
import WeeklySurvey from "../components/weekly_survey/weekly_survey";
import FieldEdit from '../components/courses/page_field_edit';
import StudentCourseView from '../containers/student_course_view';
import UserProfile from '../components/profile/index';
import UniqueStudentCourses from '../components/results_instructor_view/unique_student_courses';

// Course Designer components
import CreateCourse from '../components/courses/create_course_form';
import Courses from '../components/courses/course_dashboard';
import CourseEdit from './course_dashboard_course_edit';
import CreatePage from '../containers/course_dashboard_page_create';
import EditCourseData from '../components/courses/course_edit_data';
import PageEdit from "../components/courses/course_dashboard_page_edit";
import CreateField from '../components/courses/page_field_create';
import EditPageData from '../components/courses/page_edit_data';
import CreateTestField from '../components/courses/page_test_field_create';
import EditTestField from '../components/courses/page_test_field_edit';
import Loader from '../components/course content/loader_component'
// End of designer

export default class CoursesDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        //this.getCourseData = this.getCourseData.bind(this);
    }

    renderUserRoutes() {
        const navigationRole = this.props.navigationRole;

        if (navigationRole === null || navigationRole === undefined) {
            return <Loader Loaded={false} className="loader" />;
        }

        if (navigationRole === 'TechAcademyStudent' || navigationRole === 'UniversityStudent') {
            return (
                <Switch>
					{<Route exact path="/" component={Main} />}

					{<Route exact path="/studentDashboard" component={StudentDashboard} />}


					{/* <Route path="/inbox" component={Inbox} /> */}

					<Route path="/feedback" component={Feedback} />

                    <Route path="/courseView/:courseId/:pageNumber" component={StudentCourseView} />

                    <Route path="/progress" component={Progress} />

                    <Route path="/resources" component={Resources} />

                    <Route path="/results" component={Results} />

					<Route path="/courseDrill/:value" component={CourseDrill} />

					<Route path="/testResults/:value" component={TestResults} />

					<Route path="/dailyReportResult/" component={DailyReportResult} />

					<Route path="/weeklyReportResult/" component={WeeklyReportResult} />

                    <Route path="/dailyReport" component={DailyReport} />

                    <Route path="/weeklySurvey" component={WeeklySurvey} />

					<Route path="/profile" component={UserProfile} />
                    <Route path="/loader" component={Loader} />
                </Switch>
            );
        }
        if (navigationRole === 'LocalInstructor' || navigationRole === 'RemoteInstructor') {
            
            return (
                <Switch>
                    <Route exact path="/" component={Instructor} />

                    {/* <Route path="/inbox" component={Inbox} /> */}

                    <Route path="/courseView/:courseId/:pageNumber" component={StudentCourseView} />

                    <Route path="/testing" component={Testing} />

                    <Route path="/resources" component={Resources} />

					<Route path="/dailyReport" component={DailyReport} />

					<Route path="/instructorDailyReportResult/:value" component={InstructorDailyReportResult} />

                    <Route path="/instructorDailyReports" component={InstructorDailyReports} />

					<Route path="/instructorWeeklyReportResult/:value" component={InstructorWeeklyReportResult} />

					<Route path="/instructorTestResult/:value" component={InstructorTestResult} />

					<Route path="/instructorDrillResult/:value" component={InstructorDrillResult} />

					<Route path="/weeklyReportResult/" component={WeeklyReportResult} />

					<Route path="/studentCourses/:value" component={UniqueStudentCourses} />

                    <Route path="/weeklySurvey" component={WeeklySurvey} />
                    <Route path="/loader" component={Loader} />
                </Switch>
            );
        }

        else {
            return (
                <Switch>
                    <Route exact path="/" component={Admin} />

                    {/* <Route path="/inbox" component={Inbox} /> */}

                    <Route path="/courseView/:courseId/:pageNumber" component={StudentCourseView} />
                    <Route path="courseView/:courseId" component={StudentCourseView} />
                    <Route path="/CourseDesigner" component={Courses} />

                    <Route path="/courseEdit" component={CourseEdit} />
                    <Route path="/createPage" component={CreatePage} />
                    <Route path="/editCourseData" component={EditCourseData} />
                    <Route path="/pageEdit" component={PageEdit} />
                    <Route path="/createField" component={CreateField} />
                    <Route path="/fieldEdit" component={FieldEdit} />
                    <Route path="/EditPageData" component={EditPageData} />
                    <Route path="/CreateTestField" component={CreateTestField} />
                    <Route path="/TestFieldEdit" component={EditTestField} />

                    <Route path="/courseCreate" component={CreateCourse} />

                    <Route path="/progress" component={Progress} />

                    <Route path="/resources" component={Resources} />

                    <Route path="/dailyReport" component={DailyReport} />

                    <Route path="/weeklySurvey" component={WeeklySurvey} />

					<Route path="/profile" component={UserProfile} />
                    <Route path="/loader" component={Loader} />
                </Switch>
            );
        }
}


    //getCourseData() {
    //    this.props.fetchCourseData(this.props.CourseId, this.props.PageNumber);
    //};

    render() {
        return (
            <div>
                {/* BAR FOR HAMBURGER */}
                <div className="topBar">

                    <span onClick={() => toggleNavBar()} className="fa fa-bars"></span>
						<GetAvatar />	
                    <a className="spaLogOff" href="javascript:document.getElementById('logoutForm').submit()"><span>Log Out</span></a>
					<h4></h4>
                    <form action="/Account/LogOff" style={{ display: "none" }} id="logoutForm" method="post"></form>
                </div>
                {/* END HAMBURGER BAR */}                   

                <div className="spaMainDisplayContainer">
                    <Inbox />
                    <Modal/>

                    {/* REACT ROUTER DOM */}
                    {this.renderUserRoutes()}
                
                </div>


            </div>
        );
    }
}

//function mapStateToProps(state) {
//    return { CourseData: state.CourseData };
//}

//function mapDispatchToProps(dispatch) {
//    return bindActionCreators({
//        fetchCourseData: fetchCourseData
//    }, dispatch);
//}


//export default connect(null)(CoursesDashboard);