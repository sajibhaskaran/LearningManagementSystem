// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// action creator
import { fetchStudentCourseView } from "../actions/fetch_student_course_view";
import { postStudentTest } from "../actions/Student Courses/student_post_test_results_action";
import { postCurrentPosition } from "../actions/Student Courses/student_post_current_course_position";
// Loader 
import Loader from "../components/loader/loader";
import { loadedFalse } from "../actions/Loader/loaded_false_action";

// Field Components
import Paragraph from "../components/course content/field components/paragraph_field";
import Anchor from "../components/course content/field components/anchor_field";
import Image from "../components/course content/field components/image_field";
import Definition from "../components/course content/field components/definition_field";
import Video from "../components/course content/field components/video_field";
import Drill from "../components/course content/field components/drill_field";

class StudentCourseView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumber: "1",
            courseId: "dfe108eb-5581-47f6-b787-ba1a2809aa0e",
            TimeOut: null,
            InitStudentCourseView: false,
            SelectedAnswers: null,
            TestSubmitted: false,
            Score: null
        };

        // Bind this to the class object
        this.renderCourseContent = this.renderCourseContent.bind(this);
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.onRadioButtonSelect = this.onRadioButtonSelect.bind(this);
    }

    componentDidMount() {
        let courseId = this.props.match.params.courseId;
        let pageNumber = this.props.match.params.pageNumber;

        if (pageNumber === ":") {
            pageNumber = "1";
            window.location.hash = `#/courseView/${courseId}/:${pageNumber}`;

        } else {
            // get the course id and next page number
            courseId = courseId.slice(1, courseId.length);
            pageNumber = pageNumber.slice(1, pageNumber.length);
            
            // Loaded false
            this.props.loadedFalse();

            // Clear any set timeouts
            clearTimeout(this.state.TimeOut);

            // Save timeout id for clearing timeout
            let timeOutId = setTimeout(
                () => this.props.fetchStudentCourseView(courseId, pageNumber),
                200);

            // save Timeoutid for possible clearing and clear selected answers if any
            this.setState({
                TimeOut: timeOutId,
                SelectedAnswers: null,
                TestSubmitted: false
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {

        // Next course props to check
        let nextCourseId = nextProps.match.params.courseId;
        let nextPageNumber = nextProps.match.params.pageNumber;

        // Current course props to check
        let currentCourseId = this.props.match.params.courseId;
        let currentPageNumber = this.props.match.params.pageNumber;

        // Check if the update should trigger a course get request
        if (nextCourseId != currentCourseId || nextPageNumber != currentPageNumber) {

            // Begin loader animation
            this.props.loadedFalse();

            if (nextPageNumber !== ":") {

                // Get variables ready to send over the wire and remove the colons
                nextPageNumber = nextPageNumber.slice(1, nextPageNumber.length);

            } else {
                nextPageNumber = 1;
            }

            if (nextCourseId !== ":") {
                nextCourseId = nextCourseId.slice(1, nextCourseId.length);

            } else {
                window.location.hash = "#/";
            }

            // Clear any set timeouts
            clearTimeout(this.state.TimeOut);

            // Save timeout id for clearing timeout
            let timeOutId = setTimeout(
                () => this.props.fetchStudentCourseView(nextCourseId, nextPageNumber),
                200);

            // save Timeoutid for possible clearing and clear selected answers if any
            this.setState({
                TimeOut: timeOutId,
                SelectedAnswers: null,
                TestSubmitted: false
            });
        }
     
        // Create all possible answer choice fields for possible posting later
        if (nextProps.studentCourseView != null && nextProps.studentCourseView.Page.IsTest && this.state.SelectedAnswers == null) {

            // Create new object for selected list item to be set to
            const newTestState = {};

            // Don't run if they are paging quickly
            nextProps.studentCourseView.Page.TestFields.map((field) => {

                // Variable for correct index
                let index = 0;

                // Find the correct answer and break
                for (let i = 0; i < field.Questions.length; i++) {
                    if (field.Questions[i].CorrectChoice) {
                        index = i;
                        break;
                    }
                }

                // Set the answer for grading
                newTestState[field.TestQuestionId] = { Choice: "", Answer: field.Questions[index].Choice };
                return;
            });

            this.setState({ SelectedAnswers: newTestState });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.studentCourseView !== null && this.props.studentCourseView === null) {

            window.location.hash = "#/";
        }
    }

    // Set the information about the selected radio button
    onRadioButtonSelect(event) {
        //event.preventDefault();

        const target = event.target;
        const value = target.value;
        const name = target.name;

        // Update the selected answer or create it if it doesn't exist
        const newSelectedAnswerState = this.state.SelectedAnswers;

        newSelectedAnswerState[name].Choice = value;

        this.setState({ SelectedAnswers: newSelectedAnswerState });
    }

    onSubmitTest() {

        // Get selectedAnswer keys
        const keys = Object.keys(this.state.SelectedAnswers);

        // Correct answers counter
        let numCorrect = 0;

        // Number of questions
        let numQuestions = 0;

        // Create new array of objects to store questionId and answer for that question
        let answers = [];

        // Map through keys and check how many the user got correct
        keys.map((key) => {

            // Set correct to false unless it hits the if statement
            let correct = false;

            if (this.state.SelectedAnswers[key].Choice === this.state.SelectedAnswers[key].Answer) {
                numCorrect++;
                correct = true;
            }
            numQuestions++;

            // Push object to answers
            answers.push({ TestQuestionId: key, Answer: this.state.SelectedAnswers[key].Choice, Correct: correct });
        });

        // Score
        const score = ((numCorrect / numQuestions) * 100);

        this.setState({ TestSubmitted: true, Score: score });

        // Pass is above 85%
        const status = score >= 85 ? "pass" : "fail";

        // Send info through action
        this.props.postStudentTest(JSON.stringify(answers), this.props.studentCourseView.Page.PageId, status);
    }

    renderCourseContent() {

        if (this.props.studentCourseView !== null) {

            if (this.state.TestSubmitted) {

                const className = this.state.Score > 85 ? "text-success" : "text-error";

                return (
                    <div>
                        <div className="text-center">
                            <h5 className={className}>Your score is: {this.state.Score}%</h5>
                        </div>
                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            style={{ marginRight: "10px" }}
                            value="Back"
                            onClick={() => this.back()} />

                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            value="Next"
                            onClick={() => this.next()} />
                    </div>
                );
            }

            if (this.props.studentCourseView.Page.IsTest == false) {

                // Map over fields and generate them
                const coursesMap = this.props.studentCourseView.Page.Fields.map((field) => {

                    switch (field.FieldType) {
                        case "Paragraph":
                            return (
                                <Paragraph key={field.PageFieldId} Field={field} />
                            );
                        case "Image":
                            return (
                                <Image key={field.PageFieldId} Field={field} />
                            );
                        case "Link":
                            return (
                                <Anchor key={field.PageFieldId} Field={field} />
                            );
                        case "Drill":
                            return (
                                <Drill PageFieldId={this.props.studentCourseView.Page.PageId} key={field.PageFieldId} Field={field} />
                            );
                        case "Definition":
                            return (
                                <Definition key={field.PageFieldId} Field={field} />
                            );
                        case "Video":
                            return (
                                <Video key={field.PageFieldId} Field={field} />
                            );
                    }
                });

                return (
                    <div>
                        {coursesMap}
                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            style={{ left: "40%", transform: "translateX(-40%)", marginTop: "10px", marginLeft: "5px", marginRight: "5px", marginBottom: "10px"  }}
                            value="Back"
                            onClick={() => this.back()} />

                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            style={{ left: "40%", transform: "translateX(-40%)", marginTop: "10px", marginLeft: "5px", marginRight: "5px", marginBottom: "10px" }}
                            value="Next"
                            onClick={() => this.next()} />
                    </div>
                );
            } else if (this.state.SelectedAnswers != null) {

                // Create array to assign non-correct values
                let notCorrect = [0, 1, 2, 3].map((num) => {
                    if (num != this.state.CorrectValue) {
                        return num;
                    }
                });

                // Write test map.  Questions will be scrambled server side
                const testMap = this.props.studentCourseView.Page.TestFields.map((field) => {

                    // Map over possible question items
                    const possibleAnswers = field.Questions.map((answer, i) => {

                        //let value = answer.CorrectChoice === true ? this.state.CorrectValue : notCorrect[i];

                        //const json = JSON.stringify({ Value: value, Answer: answer.Choice });

                        return (
                            <li key={answer.QuestionChoiceId}>
                                <input
                                    type="radio"
                                    name={answer.TestQuestionId}
                                    value={answer.Choice}
                                    //checked={this.state.SelectedAnswers[answer.TestQuestionId].Answer === answer.Choice} // Can't control this component
                                    onClick={event => this.onRadioButtonSelect(event)}
                                /> {answer.Choice}
                            </li>
                        );
                    });

                    const question = (
                        <li key={field.TestQuestionId}>
                            {field.Question}
                            <ol className="spaStudentTestPageNestedList">
                                {possibleAnswers}
                            </ol>
                        </li>
                    );

                    return question;
                });

                return (
                    <div className="text-center">
                        <ol>
                            {testMap}
                        </ol>
                 
                        <input
                            type="button"
                            className="btn btn-primary"
							value="Submit"
							
                            onClick={() => this.onSubmitTest()}
                        />

                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            value="Back"
                            onClick={() => this.back()} />

                        <input
                            type="button"
                            className="btn btn-large btn-primary"
                            value="Next"
                            onClick={() => this.next()} />
                    </div>
                );
            }

        } else {
            return "";
        }
    }

    back() {
        // grab url data
        let pageNumber = this.props.match.params.pageNumber;
        let courseId = this.props.match.params.courseId;

        // decrease page number by one
        pageNumber = pageNumber.slice(1, pageNumber.length);
        pageNumber = parseInt(pageNumber) - 1;

        // update the url to be called by componentWillUpdate()
        window.location.hash = `#/courseView/${courseId}/:${pageNumber}`;
    }

    next() {
        // grab url data
        let pageNumber = this.props.match.params.pageNumber;
        let courseId = this.props.match.params.courseId;

        //postCurrentPosition(courseId, pageNumber);

        // increase page number by one
        if (pageNumber !== ":") {
            pageNumber = pageNumber.slice(1, pageNumber.length);
            pageNumber = parseInt(pageNumber) + 1;
        } else {
            pageNumber = 1;
        }

        let courseID = courseId.slice(1, courseId.length);
        postCurrentPosition(courseID, pageNumber-1);
        // Check to make sure they don't go past the last page
        if (this.props.studentCourseView !== null){
            if (pageNumber > this.props.studentCourseView.LastPageNumber){
                window.location.hash = "#/";
                return;
            }
        }

        // update the url to be called by componentWillUpdate()
        window.location.hash = `#/courseView/${courseId}/:${pageNumber}`;
    }

    render() {
        const name = this.props.studentCourseView === null ?
            "" : this.props.studentCourseView.CourseName;

        return (
            <Loader Loaded={this.props.Loaded} className="loader">
                <div className="col-xs-12">
                    <div className="row text-center">
                        <h3>{name}</h3>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            {this.renderCourseContent()}
                        </div>
                    </div>
                </div>
            </Loader>
        );
    }
}

function mapStateToProps(state) {
    return {
        studentCourseView: state.studentCourseView,
        Loaded: state.Loaded
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        fetchStudentCourseView: fetchStudentCourseView,
        loadedFalse: loadedFalse,
        postStudentTest: postStudentTest,
        postCurrentPosition: postCurrentPosition
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCourseView);