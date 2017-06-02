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
			Loaded: false,
			term: '',
			students: []
		};

		this.props.studentSearchAction();

		this.handleChange = this.handleChange.bind(this)
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
					student.Id,
					student.Name,
                    student.Location
				]

				return (
					
					
					<div className="col-sm-4 col-12 page" key={i}>
						<Link to={`/studentCourses/${userInfo}`} >
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

		<h1>List of students</h1>
			
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

