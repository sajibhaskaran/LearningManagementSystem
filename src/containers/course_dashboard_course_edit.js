import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchCoursePages } from '../actions/Course Designer/fetch_course_pages';
import { CourseSelectPage } from '../actions/Course Designer/course_dashboard_select_page_action';

class CourseEdit extends Component {
    constructor(props) {
        super(props);

        this.RouteError = false;
    }

    mapCoursePageElements() {
        if (this.props.CoursePages === null) {
            return <tr></tr>;
        }

        return this.props.CoursePages.map((page) => {
            return (
                <tr key={page.PageId}>
                    <th>{page.PageNumber}</th>
                    <th>{page.Test.toString()}</th>
                    <th>{page.FieldCount}</th>
                    <th><span onClick={() => this.props.CourseSelectPage(page)}><Link to="/PageEdit">Edit</Link></span></th>
                </tr>
            );
        });
    }

    componentWillMount() {

        // Check that they have selected a course to edit
        if (this.props.SelectedCourse === null || this.props.SelectedCourse === undefined) {
            window.location.hash = '#/CourseDesigner';
        }
    }

    componentDidMount() {
        if (this.RouteError === true) {
            window.location.hash = "#/CourseDesigner";
            return;
        }

        // Make call to get the pages
        this.props.fetchCoursePages(this.props.SelectedCourse.CourseId);
    }

    render() {

        try {
            return (
                <div>
                    <div className="text-center">
                        <h3>{this.props.SelectedCourse.CourseName}</h3>
                    </div>
                    <div className="separateTwoSpans">
                        <span><Link to="/CreatePage">Create Page</Link></span>
                        <span><Link to="/EditCourseData">Course Data</Link></span>
                    </div>
                    <table className="table table-responsive table-hover">
                        <thead>
                            <tr>
                                <th>Page Number</th>
                                <th>Test</th>
                                <th>Field Count</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.mapCoursePageElements()}
                        </tbody>
                    </table>
                </div>
            );
        } catch (e) {
            { this.RouteError = true }
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        CoursePages: state.CoursePages,
        SelectedCourse: state.SelectedCourse
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchCoursePages: fetchCoursePages,
            CourseSelectPage: CourseSelectPage
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseEdit);