// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// action creator
import { submitDailyReport } from "../../actions/submit_dailyreport";

class DailyReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CoursePosition: "",
            NeedHelp: "",
            PositiveExperiences: "",
            Feedback: "",
            HoursStudied: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        submitDailyReport(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center">
                            <h1>Daily Report</h1>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="CoursePosition">Which course and page number are you on?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="CoursePosition"
                                    value={this.state.CoursePosition}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="NeedHelp">Do you need help with anything? If so, please provide specifics as well as when you'll next be available to connect with an instructor.</label>
                                <input
                                    className="form-control"
                                    name="NeedHelp"
                                    value={this.state.NeedHelp}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PositiveExperiences">In your studies, were there any positive experiences or successes today that you would like to share?</label>
                                <input
                                    className="form-control"
                                    name="PositiveExperiences"
                                    value={this.state.PositiveExperiences}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Feedback">Is there any other feedback you'd like to provide?</label>
                                <input
                                    className="form-control"
                                    name="Feedback"
                                    value={this.state.Feedback}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="HoursStudied">How many hours did you study today?</label>
                                <input
                                    className="form-control"
                                    name="HoursStudied"
                                    value={this.state.HoursStudied}
                                    onChange={this.handleInputChange} />
                            </div>
                            <button className="btn btn-default" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitDailyReport }, dispatch);
}


export default connect(null, mapDispatchToProps)(DailyReport);