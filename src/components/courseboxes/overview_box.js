import React from 'react';

export default () => (
    <div className="course-list col-sm-6 course-box spaCourseBox">
        <div className="course-media">
            <img src="/images/courses/overview.png" className="img-responsive course-img" alt="" />
        </div>

        <div className="course-detail">
            <h4 className="heading">Overview of Software Development</h4>
            <ul className="course-features">
                <li><i className="fa fa-map-marker"></i> Overview of Software Development</li>
                <li><i className="fa fa-clock-o"></i> 5 Days</li>
            </ul>
            <p className="brief">Here you will learn the basic elements that are fundamental to any computer program, leading to greater comprehension of every computer programming language you will learn in the future.</p>
        </div>
    </div>
)