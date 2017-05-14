import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchProgress } from "../../actions/Progress/progress_action";

class Progress extends Component {
    constructor(props) {
        super(props);

    }

    calculateProgress(values) {
        console.log(values);
    }

    componentDidMount() {
        this.props.fetchProgress();
    }






    // keep in mind, this will all have to be generated mathematically, goal by timestamp and progress by checkpoints
    render() {
        console.log(this.props.courseProgress);
        if (this.props.courseProgress != null) {
            console.log(this.props.courseProgress.daysUsed);

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">

                            {/* Boot Camp */}
                            <div className="text-center">
                                <h1>Progress</h1>
                            </div>

                            <div className="text-center">
                                <h3>Boot Camp</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: this.props.courseProgress.percentActuallyDone + "%" }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: {this.props.courseProgress.percentActuallyDone + "%"}</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: this.props.courseProgress.percentShouldHaveDone +"%" }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: {this.props.courseProgress.percentShouldHaveDone + "%"}</div>
                            </div>

                            {/* Computer Basics */}
                            

                            <div className="text-center">
                                <h3>Computer Basics</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 100%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 100%</div>
                            </div>

                            {/* Software Development */}
                            <div className="text-center">
                                <h3>Overview of Software Development</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '80%' }}
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 80%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '100%' }}
                                    aria-valuenow="1000"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 100%</div>
                            </div>

                            {/* HTML & CSS */}
                            <div className="text-center">
                                <h3>HTML & CSS</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '30%' }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 30%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 50%</div>
                            </div>

                            {/* SQL */}
                            <div className="text-center">
                                <h3>Database & SQL</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* JavaScript */}
                            <div className="text-center">
                                <h3>JavaScript</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* VS */}
                            <div className="text-center">
                                <h3>Visual Studio</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* C# */}
                            <div className="text-center">
                                <h3>C# and ASP.NET</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* Project Management */}
                            <div className="text-center">
                                <h3>Project Management</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* Live Project */}
                            <div className="text-center">
                                <h3>Live Project</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                            {/* Job Placement */}
                            <div className="text-center">
                                <h3>Job Placement</h3>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped active progress-bar-info"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Progress: 0%</div>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    style={{ width: '0%' }}
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100">My Goal: 0%</div>
                            </div>

                        </div>
                    </div>
                </div>
            );

        } else return (<div>getting the data</div>);
    }
}


function mapStateToProps(state) {
    return { courseProgress: state.Progress };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProgress
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Progress);