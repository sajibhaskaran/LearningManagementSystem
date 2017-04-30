import React from 'react';

export default (props) => {

    const info = props.UserInfo;

    // Check null
    if (info === null) {
        return (
            <div className="col-xs-4">
                <div className="row">
                    Loading...
                </div>
            </div>
        );
    }

    // Get todays week day as an int
    const d = new Date();
    const dayOfWeek = d.getDay();

    return (
        <div className="col-xs-4" style={{
            height: "100%"}}>
            <div className="row">
                <div className="spaInboxStudentInfoTab">

                    <div className="col-xs-12">
                        <h6>Name: </h6>
                        <p> {info.Name}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Email: </h6>
                        <p> {info.Email}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Location: </h6>
                        <p> {info.Location}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Number: </h6>
                        <p> {info.PhoneNumber}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Current Course: </h6>
                        <p> {info.CourseName}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Current Page: </h6>
                        <p> {info.PageNumber.toString()}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Recent Score: </h6>
                        <p> {info.RecentTestScore}</p>
                    </div>

                    <div className="col-xs-12" >
                        <h6>Schedule Today: </h6>
                        <p> {info.Schedule[dayOfWeek]}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}