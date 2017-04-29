import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchPageFields } from '../../actions/Course Designer/fetch_page_fields_action';
import { SelectField } from '../../actions/Course Designer/page_field_edit_select_action';

class CoursePageEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FieldType: ""
        };

        this.RouteError = false;
    }

    mapPageFieldElements() {
        if (this.props.PageFields === null) {
            return <tr></tr>;
        }

        return this.props.PageFields.map((field) => {

            switch (this.props.SelectedPage.Test) {

                case false:
                    return (
                        <tr key={field.PageFieldId}>
                            <th>{field.FieldNumber}</th>
                            <th>{field.FieldType}</th>
                            <th>{field.Content}</th>
                            <th>{field.FieldTitle}</th>
                            <th><span onClick={() => this.props.SelectField(field)}><Link to={"/" + this.state.FieldType + "Edit"}>Edit</Link></span></th>
                        </tr>
                    );
                case true:
                    return (
                        <tr key={field.TestQuestionId}>
                            <th>{field.QuestionNumber}</th>
                            <th>{field.Question}</th>
                            <th><span onClick={() => this.props.SelectField(field)}><Link to={"/" + this.state.FieldType + "Edit"}>Edit</Link></span></th>
                        </tr>
                    );
            }
        });
    }

    componentRenderHeaders() {
        
        switch (this.props.SelectedPage.Test) {
            case false:
                return (
                    <tr>
                        <th>Field Number</th>
                        <th>Field Type</th>
                        <th>Content</th>
                        <th>Field Title</th>
                        <th></th>
                    </tr>
                );
            case true:
                return (
                    <tr>
                        <th>Question Number</th>
                        <th>Question</th>
                        <th></th>
                    </tr>
                );
        }
    }

    componentWillMount() {

        // Check that they have selected a course to edit
        if (this.props.SelectedPage === null || this.props.SelectedPage === undefined) {
            window.location.hash = '#/CourseDesigner';
        }
    }

    componentDidMount() {

        if (this.RouteError === true) {
            window.location.hash = "#/CourseDesigner";
            return;
        }

        // fetch fields via action
        this.props.fetchPageFields(this.props.SelectedPage.PageId);

        // Set page type
        this.setState({ FieldType: this.props.SelectedPage.Test === true ? "TestField" : "Field" });
    }

    render() {
        try {

            return (
                <div>
                    <div className="text-center">
                        <h3>{this.props.SelectedPage.PageNumber}</h3>
                    </div>
                    <div className="separateTwoSpans">
                        <span><Link to={"/Create" + this.state.FieldType}>Create</Link></span>
                        <span><Link to="/EditPageData">Page Data</Link></span>
                    </div>
                    <table className="table table-responsive table-hover">
                        <thead>
                            {this.componentRenderHeaders()}
                        </thead>
                        <tbody>
                            {this.mapPageFieldElements()}
                        </tbody>
                    </table>
                </div>
            );
        }
        catch (e) {
            { this.RouteError = true }
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        PageFields: state.PageFields,
        SelectedPage: state.SelectedPage
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchPageFields: fetchPageFields,
            SelectField: SelectField
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePageEdit);