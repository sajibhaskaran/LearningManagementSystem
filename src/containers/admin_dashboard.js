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

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loaded: false
        };

    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Admin Interface</h1>
            </div>
        );
    }

}

export default Admin;