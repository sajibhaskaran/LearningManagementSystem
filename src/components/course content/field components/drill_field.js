import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { studentPostDrill } from '../../../actions/Student Courses/student_post_drill_action';

class DrillField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PageFieldId: this.props.Field.PageFieldId,
            PageId: this.props.PageId,
            drillResponse: "",
            submitted: false,
            alert: ""
        };

        this.onDrillResponseChange = this.onDrillResponseChange.bind(this);
        this.submittedRendering = this.submittedRendering.bind(this);
    }

    onDrillResponseChange(event) {
        event.preventDefault();

        let value = event.target.value;

        this.setState({ drillResponse: value });
    }

    onDrillSubmit() {

        if (this.state.drillResponse.length >= 10) {

            // Create object
            const drill = {
                PageFieldId: this.state.PageFieldId,
                PageId: this.state.PageId,
                SubmissionText: this.state.drillResponse
            }

            // Action to post student drill
            this.props.studentPostDrill(drill);

            this.setState({ submitted: true });

        } else {
            this.setState({ alert: "alert-danger" });
        }
    }

    submittedRendering() {

        if (this.state.submitted) {
            return (
                <div className="text-center">
                    <h3 className="text-success">Submitted</h3>
                </div>
            );
        } else {

            return (

                <div>
                    <h5>
                        {this.props.Field.FieldTitle}
                    </h5>

                    <p>{this.props.Field.Content}</p>

                    <textarea
                        type="text"
                        style={{
                            width: "100%", resize: "none",
                            height: "20em", overflow: "auto",
                            wordBreak: "break-all",
                            wordBreak: "break-word"
                        }}
                        className={this.state.alert}
                        value={this.state.drillResponse}
                        onChange={event => this.onDrillResponseChange(event)}
                    ></textarea>

                    <input
                        type="button"
                        className="btn btn-primary"
                        value="Submit"
                        onClick={() => this.onDrillSubmit()}
                    />

                </div>
            );
        }
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="col-xs-12">

                    {this.submittedRendering()}

                </div>
            </div>
        );
    }
}

//function mapStateToProps(state) {
//    return {
//        studentCourseView: state.studentCourseView
//    };
//}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        studentPostDrill: studentPostDrill
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(DrillField);