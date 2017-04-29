import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { createTestField } from '../../actions/Course Designer/page_test_field_create_action';

class CreateTestField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PageId: "",
            Question: "",
            QuestionNumber: "0",
            CorrectAnswer: "",
            IncorrectAnswer1: "",
            IncorrectAnswer2: "",
            IncorrectAnswer3: ""
        };

        this.RouteError = false;

        // Bind 'this' to the class object
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
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

    onSubmitForm(event) {
        event.preventDefault();

        if (this.state.QuestionNumber === "" || this.state.QuestionNumber < 0) {
            this.setState({ QuestionNumber: "0" });
        }

        this.props.createTestField(this.state);
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

        if (this.props.SelectedPage !== null) {
            this.setState({ PageId: this.props.SelectedPage.PageId });
        }
    }

    render() {
        try {

            return (
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">

                            <form onSubmit={e => this.onSubmitForm(e)}>
                                <div className="row">

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Question</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Question"
                                            value={this.state.Question}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Question Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="QuestionNumber"
                                            value={this.state.QuestionNumber}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Correct Answer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="CorrectAnswer"
                                            value={this.state.CorrectAnswer}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Incorrect Answer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="IncorrectAnswer1"
                                            value={this.state.IncorrectAnswer1}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Incorrect Answer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="IncorrectAnswer2"
                                            value={this.state.IncorrectAnswer2}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                    <div className="form-group col-xs-12 col-sm-6">
                                        <label htmlFor="Question">Incorrect Answer</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="IncorrectAnswer3"
                                            value={this.state.IncorrectAnswer3}
                                            onChange={event => this.onInputChange(event)} />
                                    </div>

                                </div>
                                <input className="btn btn-default" type="submit" value="Create" />
                            </form>

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
        SelectedPage: state.SelectedPage
    };
}

// Allow our class to access actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            createTestField: createTestField
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTestField);
