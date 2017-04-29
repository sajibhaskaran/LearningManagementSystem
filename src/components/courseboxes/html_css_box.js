import React from 'react';

export default () => (
    <div className="course-list col-sm-6 course-box spaCourseBox">
        <div className="course-media">
            <img src="/images/courses/html5.png" className="img-responsive course-img" alt="" />
        </div>
        <div className="course-detail">
            <h4 className="heading">HTML & CSS</h4>
            <ul className="course-features">
                <li><i className="fa fa-map-marker"></i> HTML & CSS</li>
                <li><i className="fa fa-clock-o"></i> 10 Days</li>
            </ul>
            <p className="brief">This course covers the latest versions of HTML (Hyper Text Markup Language) and CSS (Cascading Style Sheets). All websites are made using HTML. CSS is a tool to manage many elements of the pages made with HTML.</p>
        </div>
    </div>
)