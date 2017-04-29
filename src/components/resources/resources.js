import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Resources extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="list-group col-sm-12">
                        <div className="text-center">
                            <h1>The Tech Academy LMS Resources Library</h1>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">Computer Basics</h4>
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/01_CBC/Start%20Here!%20Fundamentals%20of%20Microsoft%20.NET%20Chap%201.pdf">
                                    Chapter 1, Fundamentals of Microsoft .NET Programming
                                </a>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">JavaScript</h4>
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/08_JavaScript/BJSC-Murach's%20JS%20Intro1stChap.pdf">
                                    JavaScript and jQuery
                                </a>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">C#</h4>
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20for%20Dummies%20Pg.%2014-24.pdf">
                                    C# For Dummies
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20for%20Dummies%20Book%20II%20Chap%201.pdf">
                                    C# For Dummies Book II, Chapter 1
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20Start%20Here%20Chap%204.pdf">
                                    Fundamentals Of Microsoft .NET Programming, Chapter 4
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20Start%20Here%20Chap%205.pdf">
                                    Fundamentals Of Microsoft .NET Programming, Chapter 5
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20Start%20Here%20Chap%206.pdf">
                                    Fundamentals Of Microsoft .NET Programming, Chapter 6
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20Start%20Here%20Chap%209.pdf">
                                    Fundamentals Of Microsoft .NET Programming, Chapter 9
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20Pro%20CSharp%202008%20Pg.%2036-38.pdf">
                                    Pro C# 2008 and the .NET 3.5 Platform
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20ASP.NET%203.5%20Intro.pdf">
                                    ASP.NET 3.5, Introduction
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20ASP.NET%203.5%20Chap%201.pdf">
                                    ASP.NET 3.5, Chapter 1
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20ASP.NET%203.5%20Chap%202.pdf">
                                    ASP.NET 3.5, Chapter 2
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/10_CSharp/CSharp%20ASP.NET%203.5%20for%20Dummies%20Chap%203.pdf">
                                    ASP.NET 3.5, Chapter 3
                                </a>
                            </div>
                        </a>

                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">Project Management</h4>
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/03_Overview/OSDC-Essentials%20of%20Flowcharting.pdf">
                                    Essentials of Flowcharting
                                </a>
                                <br />
                                <a target="_blank" href="https://www.learncodinganywhere.com/learningmanagementsystem/links/11_PMB/PMBC-SCRUM.pdf">
                                    SCRUM: A Breathtakingly Brief and Agile Introduction
                                </a>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}