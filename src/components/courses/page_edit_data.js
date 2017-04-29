import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { pageEditData } from '../../actions/Course Designer/page_edit_data_action';

class EditPageData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CourseId: "",
            PageId: "",
            IsTest: "",
            PageNumber: ""
        };

        // Bind 'this' to the class object
        this.onPageSubmit = this.onPageSubmit.bind(this);

        // Tracks if something went wrong with mounting of component
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
        if (this.props.SelectedCourse !== null) {
            this.props.pageEditData(this.state);
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

        this.setState({
            CourseId: this.props.SelectedPage.CourseId,
            PageId: this.props.SelectedPage.PageId,
            IsTest: this.props.SelectedPage.Test,
            PageNumber: this.props.SelectedPage.PageNumber
        });

        // fetch fields via action
        //this.props.fetchPageFields(this.props.SelectedPage.PageId);
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
                                <select defaultValue={this.state.IsTest} className="form-control" id="PageCreateTest" onChange={event => this.onTestChange(event)}>
                                    <option className="form-control" value="true">True</option>
                                    <option className="form-control" value="false">False</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-offset-5 col-sm-2 text-center courseCreateButtonSubmit">
                        <button onClick={() => this.onPageSubmit()} type="button" className="form-control">Save</button>
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
            pageEditData: pageEditData
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPageData);