import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../../actions/Course Designer/course_dashboard_action';
import { selectedCourse } from '../../actions/Course Designer/course_dashboard_select_course_action';

// Loader
import Loader from '../loader/loader';
import { loadedFalse } from '../../actions/Loader/loaded_false_action';

class CourseDashboard extends Component {

    populateCourses() {

        if (this.props.CourseDashboard === null) {
            return <tr></tr>;
        }

        return this.props.CourseDashboard.map((course) => {
            return (
                <tr key={course.CourseId}>
                    <th>{course.CourseName}</th>
                    <th>{course.Core.toString()}</th>
                    <th>{course.TechAcademy.toString()}</th>
                    <th>{course.UniversityOfConcordia.toString()}</th>
                    <th>{course.Position}</th>
                    <th>{course.PageCount}</th>
                    <th>
                        <div onClick={() => this.props.selectedCourse(course)}><Link to="/CourseEdit">Edit</Link></div>
                    </th>
                </tr>
            );
        });
    }

    componentWillMount() {
        this.props.loadedFalse();
    }

    componentDidMount() {

        // Get courses
        this.props.fetchCourses();
    }

    render() {
        return (
            <Loader Loaded={this.props.Loaded} className="loader">
                <Link to="/courseCreate">Create New</Link>
                <table className="table table-responsive table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Core</th>
                            <th>Academy</th>
                            <th>University</th>
                            <th>Position</th>
                            <th>Pages</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.populateCourses()}
                    </tbody>
                </table>
            </Loader>
        );
    }
}

function mapStateToProps(state) {
    return {
        CourseDashboard: state.CourseDashboard,
        UserRole: state.navigation_bar_role,
        Loaded: state.Loaded
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchCourses: fetchCourses,
            selectedCourse: selectedCourse,
            loadedFalse: loadedFalse
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDashboard);