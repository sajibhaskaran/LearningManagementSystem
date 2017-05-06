import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Student Course Page


// Loader
import Loader from '../components/loader/loader';

// Actions
import { studentSearchAction } from '../actions/Student Search/student_search_action';

class Instructor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: false
		};
	}

	mapCourseViews() {

		if (this.props.studentSearch !== null) {
			//console.log(this.props.studentSearch);

			// Preload images
			//var preload = new Image();
			//const picArray = [StudentSearch]
			//const path = "/images/resultsIMG/";

			// Map over props and populate our page based on these props
			const courseMap = this.props.studentSearch.map((student, i) => {

				// Gives ability to pass two table ID's (student info) to <Link> Params
				let userInfo = [
					student.Id,
					student.Name
				]

				return (
					
					
					<div className="col-sm-4 col-12 page" key={i}>
						<Link to={`/studentCourses/${userInfo}`} >
						<div className="card" style={{ height: "auto", paddingBottom: "5px" }}>
							{/*<img className="card-img-top img-responsive" src={path + picArray[i]} alt="Card image cap" />*/}
							<div className="card-block spaCourseBox text-center">
									<h6>{student.Name} </h6>
									<p> {student.Location}</p>
							</div>
						</div>
						</Link>
					</div>

				);
			});

			return courseMap;

		}
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
	this.props.studentSearchAction();
}


render() {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>List of students...</h1>
			<hr />
			<div className="container">
				<div className="row">
					{this.mapCourseViews()}
				</div>
			</div>
		</div>
	);
}
}




// Bind actions to redux
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		studentSearchAction: studentSearchAction,
	}, dispatch);
}

// Allow this component to access redux store
function mapStateToProps(state) {
	return {
		studentSearch: state.StudentSearch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructor);

