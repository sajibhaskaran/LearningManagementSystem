import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Student Course Page


// Loader
import Loader from '../loader/loader';

// Actions
import { studentSearchWeeklyAction } from '../../actions/Student Search/student_search_weekly_action';

class Weekly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loaded: false,
            term: '',
            students: []
        };

        this.props.studentSearchWeeklyAction();

        this.handleChange = this.handleChange.bind(this)
    }
    


    // filtering out the data
    // NOTE: To who ever gets assigned to refactoring this; I'm sorry... May the gods be with you.
    mapUnreadStudents() {

        //var unreadStudents = [];
        //var user = this.state.students;
        //// filtering the this.state.students
        //for (let i = 0; i < user.length; i++) {
        //    console.log("the user we want: " , user);
        //    if (!user[i].Reports == [0]) {
        //        for (let r = 0; r < user[i].Reports.length; r++) {
        //            if (user[i].Feedbacks !== [0] && user[i].Feedbacks.length != user[i].Reports.length) {
        //                for (let f = 0; f < user[i].Feedbacks.length; f++) {
        //                    if (user[i].Reports[r].WeeklyReportFormId != user[i].Feedbacks[f].WeeklyReportId) {
        //                        unreadStudents.push(user[i]);
        //                        break;
        //                    }
        //                }
        //                break;
        //            }
        //        }
        //    }
        //}

        const unreadStudents = this.state.students.reduce((newList, item) => {
                if(item.Reports.length > item.Feedbacks.length) newList.push(item)
                return newList;
        
        }, []);

        
        // building a list of cards of those student's whose daily reports hasn't been responded 
        const studentMap = unreadStudents.map((student, i) => {
            let userInfo = [
                student.Name,
                student.Id,
                student.Location
            ]

            return (
                <div className="col-sm-4 col-12 page" key={i}>
                    <Link to={`/instructorWeeklyReportResult/${userInfo}`}>
                        <div className="card" style={{ height: "auto", padding: "5px" }}>
                            <div className="card-block spaCourseBox text-center">
                                <h6>{student.Name}</h6>
                                <p>{student.Location || "not listed"}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                );
            })
            return studentMap;
        }








    mapStudentViews() {

        if (this.state.students !== null) {

    // Preload images
    //var preload = new Image();
    //const picArray = [StudentSearch]
    //const path = "/images/resultsIMG/";

    // Map over props and populate our page based on these props
            const studentMap = this.state.students.map((student, i) => {
    // Gives ability to pass two table ID's (student info) to <Link> Params
                let userInfo = [
                    student.Name,
					student.Id,					
                    student.Location
]

                return (
					
					
					<div className="col-sm-4 col-12 page" key={i}>
{/*	<Link to={`/studentCourses/${userInfo}`} > */}
    <Link to={`/instructorWeeklyReportResult/${userInfo}`}>
    <div className="card" style={{ height: "auto", paddingBottom: "5px" }}>
{/*<img className="card-img-top img-responsive" src={path + picArray[i]} alt="Card image cap" />*/}
        <div className="card-block spaCourseBox text-center">
                <h6>{student.Name} </h6>
                <p> { student.Location  || "not listed"}</p>
        </div>
    </div>
    </Link>
</div>

);
});

return studentMap;

}
}


handleChange(e) {

let searchResult = this.props.studentSearch.filter(student => student.Name
                                                        .toLowerCase()
                                                        .includes(e.target.value
                                                        .toLowerCase()));

this.setState({
			
    term: e.target.value,
    students: searchResult



})

}



componentDidUpdate(prevProps, prevState) {

// set loaded to true
if (this.state.Loaded === false) {

this.setState({ Loaded: true });
}

$(".spaCourseBox").matchHeight();
}


componentDidMount() {
// get request to return a list of all the TechAcademy students 
//this.props.studentSearchAction();
this.setState({
    students: this.props.studentSearch
})

	
	
}

componentWillReceiveProps(nextProps) {
	
this.setState({
    students: nextProps.studentSearch
})

	

}


render() {
return (
<div className="text-center">
			 

<h1>student's weekly reports</h1>
			
			
			

<div className="container-1">
<input
type="text"
id="search"
placeholder="Search...."
value={this.state.term}
onChange={this.handleChange}
/> 
</div>

<hr className="style-two" />
<h4>Please Respond to Weekly Reports</h4>
<div className="container">
    <div className="row">
        {this.mapUnreadStudents()}
    </div>
</div>

<hr className="style-two" />
<br />
<h4>All Students</h4>
<div className="container">
    <div className="row">
        {this.mapStudentViews()}
    </div>
</div>


</div>
);
}
}




// Bind actions to redux
function mapDispatchToProps(dispatch) {
return bindActionCreators({
    studentSearchWeeklyAction: studentSearchWeeklyAction,
}, dispatch);
}

// Allow this component to access redux store
function mapStateToProps(state) {
return {
    studentSearch: state.StudentSearch
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);