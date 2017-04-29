import React from 'react';

export default () => (
    <div className="course-list col-sm-6 course-box spaCourseBox">
        <div className="course-media">
            <img src="/images/courses/liveProject.png" className="img-responsive course-img" alt="" />
        </div>
        <div className="course-detail">
            <h4 className="heading">Live Project</h4>
            <ul className="course-features">
                <li><i className="fa fa-map-marker"></i> Live Project</li>
                <li><i className="fa fa-clock-o"></i> 10 Days</li>
            </ul>
            <p className="brief">Every student is given the opportunity to partake in an exercise which involves a real world software development project. Our live projects allow a student to put the programming skills they learn to use on practical assignments that mirror actual software development projects one could run across on a real contract. This will be an element of your resume.</p>
        </div>
    </div>    
)