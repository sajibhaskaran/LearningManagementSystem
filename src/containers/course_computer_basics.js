import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCoursePages } from '../actions/fetch_course_pages';

class CourseEdit extends Component {
    constructor(props) {
        super(props);
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
                    <th><Link to="/">Edit</Link></th>
                </tr>
            );
    });
    }

componentDidMount() {
        // Make call to get the pages
        this.props.fetchCoursePages(this.props.SelectedCourseId);
    }

    render() {
        return (
            <div>
                <div className="separateTwoSpans">
                    <Link to="/CreatePage">Create Page</Link>
                    <Link to="/EditCourseData">Course Data</Link>
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
    }
}

