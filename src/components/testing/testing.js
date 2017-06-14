import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// Loader
import Loader from '../loader/loader';

// Actions
import { studentSearchDrillAction } from '../../actions/Student Search/student_search_drill_action';

class Testing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: false,
			term: '',
			students: []
		};

		this.props.studentSearchDrillAction();

		this.handleChange = this.handleChange.bind(this)
	}

	// filtering out the data

	mapUnreadStudents() {
		if (typeof this.state.students[0] != 'undefined') {
			
			if (this.state.students[0].hasOwnProperty('Drills')) {
				const unreadStudents = this.state.students.reduce((newList, item) => {
					
					if (item.Drills.length > 0) {
						for (let i = 0; i < item.Drills.length; i++) {
							
							if (item.Drills[i].Viewed == false){
								newList.push(item);
								break;
						}							
						}
					}
						
					return newList;
				}, []);




				console.log(unreadStudents)

				// building a list of cards of those student's whose daily reports hasn't been responded.
				const studentMap = unreadStudents.map((student, i) => {
					let userInfo = [
						student.Name,
						student.Id,
						student.Location
					]

					return (
						<div className="col-sm-4 col-12 page" key={i}>
							<Link to={`/drillReportResultsInstructor/${userInfo}`}>
								<div className="card" style={{ height: "auto", padding: "5px" }}>
									<div className="card-block spaCourseBox text-center">
										<h6>{student.Name}</h6>
										<p> {student.Location || "not listed"}</p>
									</div>
								</div>
							</Link>
						</div>

					);
				})
				return studentMap;

			}

			



		}
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
						<Link to={`/drillReportResultsInstructor/${userInfo}`}>
							<div className="card" style={{ height: "auto", paddingBottom: "5px" }}>
								{/*<img className="card-img-top img-responsive" src={path + picArray[i]} alt="Card image cap" />*/}
								<div className="card-block spaCourseBox text-center">
									<h6>{student.Name} </h6>
									<p> {student.Location || "not listed"}</p>
								</div>
							</div>
						</Link>
					</div>

				);
			});

			return studentMap;

		}
	}

	// search functionality.
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

				<h1>student's drill reports</h1>


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
				<h4>Please Respond to Drill Reports</h4>
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
		studentSearchDrillAction: studentSearchDrillAction,
	}, dispatch);
}

// Allow this component to access redux store
function mapStateToProps(state) {
	return {
		studentSearch: state.StudentSearch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);