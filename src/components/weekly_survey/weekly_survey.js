// libraries
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// action creator
import { submitWeeklySurvey } from "../../actions/submit_weeklysurvey";

class WeeklySurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CoursePosition: "",
            NeedHelp: "",
            MaterialsAndSupplies: "",
            Meetups: "",
            Positives: "",
            Complaints: "",
            HoursStudied: "",
            JobSearch: "",
            Referral: "",
            Miscellaneous: ""
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

        submitWeeklySurvey(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center">
                            <h1>Weekly Survey</h1>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="CoursePosition">Which Course are you on? How's it going?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="CoursePosition"
                                    value={this.state.CoursePosition}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="NeedHelp">In your studies is there anything you need help with?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="NeedHelp"
                                    value={this.state.NeedHelp}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="MaterialsAndSupplies">Are there any materials or supplies you need or that would help you with your progress through the program?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="MaterialsAndSupplies"
                                    value={this.state.MaterialsAndSupplies}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Meetups">How many meetups did you attend this week?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Meetups"
                                    value={this.state.Meetups}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Positives">Are there any positive experiences or successes you've had on this program that you would like to share?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Positives"
                                    value={this.state.Positives}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Complaints">Regarding your experience here thus far, do you have any complaints?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Complaints"
                                    value={this.state.Complaints}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="HoursStudied">How many hours did you study this week?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="HoursStudied"
                                    value={this.state.HoursStudied }
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="JobSearch">Where do you stand on your job search? I.e. Not working on job search at this time, need to finish Job Placement Course, sending out resumes, interviewing at particular companies, etc.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="JobSearch"
                                    value={this.state.JobSearch}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Referral">Is there anyone that you would like to refer to our program?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Referral"
                                    value={this.state.Referral}
                                    onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Miscellaneous">Is there anything else you would like to make known?</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Miscellaneous"
                                    value={this.state.Miscellaneous}
                                    onChange={this.handleInputChange} />
                            </div>
                            <button className="btn btn-default" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitWeeklySurvey }, dispatch);
}

export default connect(null, mapDispatchToProps)(WeeklySurvey);