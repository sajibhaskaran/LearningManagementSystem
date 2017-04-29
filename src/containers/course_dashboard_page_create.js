import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreator } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchCoursePages } from '../actions/Course Designer/fetch_course_pages';


class PageCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CourseId: "",
            IsTest: "false",
            PageNumber: "0"
        };

        this.RouteError = false;
    }

    onTestChange(event) {

        // Control the state of page test or not
        this.setState({ IsTest: event.target.value });
    }

    onPageNumberChange(event) {
        event.preventDefault();

        // Control the pageNumber state
        this.setState({ PageNumber: event.target.value });
    }

    onPageSubmit() {

        // Make post request
        if (this.props.SelectedCourseId !== null) {

            axios.post("/SPA/CreateCoursePage", {pageJson: JSON.stringify(this.state) });
        }

        // Programmatically change component
        window.location.hash = '#/CourseEdit';
    }

    componentWillMount() {
        let hash;
        
        // Make sure they didn't use the url to navigate here
        if (this.props.SelectedCourse.CourseId === null || this.props.SelectedCourse.CourseId === undefined) {
            hash = '#/CourseDesigner';
        }
        else {
            hash = '#/CreatePage';
        }

        // Programmatically change component
        window.location.hash = hash;
    }

    componentDidMount() {
        if (this.RouteError === true) {
            window.location.hash = "#/CourseDesigner";
            return;
        }

        this.setState({ CourseId: this.props.SelectedCourse.CourseId });
    }

    render() {
        try {
            return (
                <div>
                    <div className="col-xs-12 col-md-6">

                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h4>Page Number</h4>
                            </div>
                            <div className="col-xs-12">
                                <input value={this.state.PageNumber}
                                    onChange={event => this.onPageNumberChange(event)}
                                    type="number" className="form-control"
                                    id="PageCreatePageNumber" />
                            </div>
                        </div>

                    </div>

                    <div className="col-xs-12 col-md-6">

                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <h4>Test Page</h4>
                            </div>
                            <div className="col-xs-12">
                                <select defaultValue="false" className="form-control" id="PageCreateTest" onChange={event => this.onTestChange(event)}>
                                    <option className="form-control" value="true">True</option>
                                    <option className="form-control" value="false">False</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-offset-5 col-sm-2 text-center courseCreateButtonSubmit">
                        <button onClick={() => this.onPageSubmit()} type="button" className="form-control">Create</button>
                    </div>
                </div>
            );
        } catch (e) {
            { this.RouteError = true }
            return <div></div>;
        }
    }
}

//function mapDispatchToProps(dispatch){
//    return bindActionCreator({
//        fetchCoursePages: fetchCoursePages
//    }, dispatch);
//}

function mapStateToProps(state){
    return {
        SelectedCourse: state.SelectedCourse
    }
}

export default connect(mapStateToProps)(PageCreate);