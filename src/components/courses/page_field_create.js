import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

// Form components
import ParagraphForm from './page_field_create_paragraph';
import DefinitionForm from './page_field_create_definition';
import DrillForm from './page_field_create_drill';
import LinkForm from './page_field_create_link';
import ImageForm from './page_field_create_image';
import VideoForm from './page_field_create_video';

// Action
import { postPageCreateField } from '../../actions/Course Designer/page_field_create_action';

class PageFieldCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Field: {
                FieldType: "Paragraph",
                PageId: "",
                Content: "",
                FieldNumber: 0,
                FieldTitle: "",
                FieldReference: ""
            }
        };

        this.RouteError = false;

        // bind this context to the class
        this.onFieldTypeChange = this.onFieldTypeChange.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // Sets state for the field item
    setSingleFieldState(type, value) {

        // Set the field state and clear other 
        this.setState((prevState) => {

            // Object to return
            let newState = prevState;

            // Create object to replace last field object
            const field = {
                FieldType: prevState.Field.FieldType,
                PageId: prevState.Field.PageId,
                Content: prevState.Field.Content,
                FieldNumber: prevState.Field.FieldNumber,
                FieldTitle: prevState.Field.FieldTitle,
                FieldReference: prevState.Field.FieldReference
            };

            // Check which field is being edited and set the new value
            switch (type) {
                case "FieldType":
                    field.FieldType = value;
                    break;
                case "FieldNumber":
                    field.FieldNumber = value;
                    break;
                case "Content":
                    field.Content = value;
                    break;
                case "FieldTitle":
                    field.FieldTitle = value;
                    break;
                case "FieldReference":
                    field.FieldReference = value;
                    break;
                case "PageId":
                    field.PageId = value;
                    break;
            }

            // Edit previous field
            newState.Field = field;

            // Return changed state
            return newState;
        });

    }

    onFieldTypeChange(value) {

        // Set new field value
        this.setSingleFieldState("FieldType", value);
    }

    onFieldNumberChange(event) {
        event.preventDefault();

        // Get default value
        const value = event.target.value;

        if (value === "" || parseInt(value) < 0) {
            this.setSingleFieldState("FieldNumber", 0);
            return;
        }

        // Set new field number
        this.setSingleFieldState("FieldNumber", parseInt(value));
    }

    onContentChange(event) {
        event.preventDefault();

        const value = event.target.value;

        this.setSingleFieldState("Content", value);
    }

    onFieldTitleChange(event) {
        event.preventDefault();

        const value = event.target.value;

        this.setSingleFieldState("FieldTitle", value);
    }

    onFieldReferenceChange(event) {
        event.preventDefault();

        const value = event.target.value;

        this.setSingleFieldState("FieldReference", value);
    }

    // Conditionally render a component based on which field type is chosen
    renderFieldForm() {

        const type = this.state.Field.FieldType;

        switch (type) {
            case "Paragraph":
                return(
                    <ParagraphForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                    />
                );

            case "Definition":
                return (
                    <DefinitionForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                    />
                );
            case "Link":
                return (
                    <LinkForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        FieldReference={this.state.Field.FieldReference}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                        onFieldReferenceChange={event => this.onFieldReferenceChange(event)}
                    />
                );
            case "Drill":
                return (
                    <DrillForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                    />
                );
            case "Image":
                return (
                    <ImageForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        FieldReference={this.state.Field.FieldReference}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                        onFieldReferenceChange={event => this.onFieldReferenceChange(event)}
                    />
                );
            case "Video":
                return (
                    <VideoForm
                        FieldTitle={this.state.Field.FieldTitle}
                        Content={this.state.Field.Content}
                        FieldReference={this.state.Field.FieldReference}
                        onContentChange={event => this.onContentChange(event)}
                        onFieldTitleChange={event => this.onFieldTitleChange(event)}
                        onFieldReferenceChange={event => this.onFieldReferenceChange(event)}
                    />
                );
            default:
                return <div></div>;
        }
    }

    onFormSubmit() {
        
        this.props.postPageCreateField(this.state.Field);
        
    }

    componentDidMount() {

        if (this.RouteError === true || this.props.SelectedPage === null) {
            window.location.hash = "#/CourseDesigner";
            return;
        }

        // Set the props state
        this.setSingleFieldState("PageId", this.props.SelectedPage.PageId);
    }

    render() {
        try {
            return (
                <div className="col-xs-12">
                    <div className="col-xs-12 text-center spaCreatePageField">
                        <h3>Create Field</h3>
                        <div className="row">

                            <div className="col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h4>Field Type</h4>
                                    </div>
                                    <div className="col-xs-12">
                                        <select
                                            defaultValue={this.state.Field.FieldType}
                                            className="form-control"
                                            onChange={(event) => this.onFieldTypeChange(event.target.value)}
                                        >

                                            <option value="Paragraph">Paragraph</option>
                                            <option value="Definition">Definition</option>
                                            <option value="Link">URL Link</option>
                                            <option value="Drill">Drill</option>
                                            <option value="Image">Image</option>
                                            <option value="Video">Video</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h4>Field Number</h4>
                                    </div>
                                    <div className="col-xs-12">
                                        <input
                                            className="form-control"
                                            type="number"
                                            value={this.state.Field.FieldNumber}
                                            onChange={(event) => this.onFieldNumberChange(event)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {this.renderFieldForm()}

                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <input
                                            onClick={() => this.onFormSubmit()}
                                            className="btn btn-submit spaCourseCreationBtn"
                                            type="submit"
                                            defaultValue="Create"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
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
        //PageFields: state.PageFields,
        SelectedPage: state.SelectedPage
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            postPageCreateField: postPageCreateField
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PageFieldCreate);