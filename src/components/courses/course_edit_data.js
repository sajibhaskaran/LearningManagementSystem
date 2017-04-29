import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { editCourseData } from '../../actions/Course Designer/course_edit_data_action';

class EditCourseData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CourseId: "",
            CourseName: "",
            IsCore: "true",
            University: "true",
            Academy: "true",
            Position: "0",
            CourseDescription: "",
            DaysToComplete: "1",
            ImageUrl: ""
        };

        this.RouteError = false;

        this.onCourseCreation = this.onCourseCreation.bind(this);
    }

    onInputChange(event) {
        event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onCourseCreation(e) {
        e.preventDefault();
        if (this.state.CourseName === "") {
            document.getElementById("CourseName").className = "form-control alert alert-danger";
        } else {

            const days = (parseInt(this.state.DaysToComplete) < 1 || this.state.DaysToComplete === "") ? 1 : parseInt(this.state.DaysToComplete);

            const core = this.state.IsCore === "true" || this.state.IsCore === true ? true : false;

            const university = this.state.University === "true" || this.state.University === true ? true : false;

            const academy = this.state.Academy === "true" || this.state.Academy === true ? true : false;

            const position = parseInt(this.state.Position) < 0 ? 0 : parseInt(this.state.Position);

            // Create object to match object on server
            const object = {
                CourseId: this.state.CourseId,
                CourseName: this.state.CourseName,
                Core: core,
                UniversityOfConcordia: university,
                TechAcademy: academy,
                CoursePosition: position,
                CourseDescription: this.state.CourseDescription,
                DaysToComplete: days,
                ImageUrl: this.state.ImageUrl
            };

            // Submit post request
            this.props.editCourseData(object);
        }
    }

    componentDidMount() {
        if (this.RouteError === true) {
            window.location.hash = "#/CourseDesigner";
            return;
        }

        if (this.props.SelectedCourse !== null) {

            const course = this.props.SelectedCourse;

            this.setState({
                CourseId: course.CourseId,
                CourseName: course.CourseName,
                IsCore: course.Core,
                University: course.UniversityOfConcordia,
                Academy: course.TechAcademy,
                Position: course.Position,
                CourseDescription: course.CourseDescription,
                DaysToComplete: course.DaysToComplete,
                ImageUrl: course.ImageUrl
            });
        }
    }

    render() {

        try {
            return (
                <div className="text-center col-xs-12">
                    <form onSubmit={e => this.onCourseCreation(e)}>
                        <h3>Create Course</h3>
                        <div className="row">

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="CourseName">Course Name</label>
                                <input
                                    type="text"
                                    id="CourseName"
                                    className="form-control"
                                    name="CourseName"
                                    value={this.state.CourseName}
                                    onChange={event => this.onInputChange(event)} />
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="IsCore">Core Course</label>
                                <select
                                    className="form-control"
                                    name="IsCore"
                                    defaultValue={this.props.IsCore}
                                    onChange={event => this.onInputChange(event)}>

                                    <option value="true">True</option>
                                    <option value="false">False</option>

                                </select>
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="University">University of Concordia</label>
                                <select
                                    className="form-control"
                                    name="University"
                                    defaultValue={this.props.University}
                                    onChange={event => this.onInputChange(event)}>

                                    <option value="true">True</option>
                                    <option value="false">False</option>

                                </select>
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="Academy">The Tech Academy</label>
                                <select
                                    className="form-control"
                                    name="Academy"
                                    defaultValue={this.props.Academy}
                                    onChange={event => this.onInputChange(event)}>

                                    <option value="true">True</option>
                                    <option value="false">False</option>

                                </select>
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="Position">Course Position</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="Position"
                                    value={this.state.Position}
                                    onChange={event => this.onInputChange(event)} />
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="DaysToComplete">Days To Complete</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="DaysToComplete"
                                    value={this.state.DaysToComplete}
                                    onChange={event => this.onInputChange(event)} />
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="ImageUrl">Course Image Url</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ImageUrl"
                                    value={this.state.ImageUrl}
                                    onChange={event => this.onInputChange(event)} />
                            </div>

                            <div className="form-group col-xs-12 col-sm-6">
                                <label htmlFor="CourseDescription">Course Description</label>
                                <textarea
                                    className="form-control courseDesignerTextArea"
                                    name="CourseDescription"
                                    value={this.state.CourseDescription}
                                    onChange={event => this.onInputChange(event)}>
                                </textarea>
                            </div>

                        </div>
                        <input className="btn btn-default" type="submit" value="Save" />
                    </form>
                </div>
            );
        } catch (e) {
            { this.RouteError = true }
            return <div></div>;
        }
    }
}

// Allow our class to inherit state
function mapStateToProps(state) {
    return {
        SelectedCourse: state.SelectedCourse
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            editCourseData: editCourseData
        },
        dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCourseData);