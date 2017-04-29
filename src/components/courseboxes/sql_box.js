import React from 'react';

export default () => (
    <div className="course-list col-sm-6 course-box spaCourseBox">
        <div className="course-media">
            <img src="/images/courses/db.png" className="img-responsive course-img" alt="" />
        </div>
        <div className="course-detail">
            <h4 className="heading">Database & SQL</h4>
            <ul className="course-features">
                <li><i className="fa fa-map-marker"></i> Database & SQL</li>
                <li><i className="fa fa-clock-o"></i> 8 Days</li>
            </ul>
            <p className="brief">This course covers database fundementals, how to create databases, and Structured Query Language (SQL), and how it is used to create databases and populate them.</p>
        </div>
    </div>
)