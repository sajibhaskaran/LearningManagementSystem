import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Loader
import Loader from '../../components/loader/loader';

// Actions
import { studentSearchAction } from '../../actions/Student Search/student_search_action';

class StudentSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Loaded: false
		};

	}



	mapCourseViews() {

		if (this.props.studentSearch !== null) {
			
			// Preload images
			var preload = new Image();
			const picArray = 
			const path = "/images/resultsIMG/";

			// Map over props and populate our page based on these props
			const courseMap = this.props.studentSearch.map((student, i) => {


				return (


					<div className="col-sm-4 col-12 page" key={i}>
						<div className="card" style={{ height: "auto", paddingBottom: "5px" }}>
							<img className="card-img-top img-responsive" src={path + picArray[i]} alt="Card image cap" />
							<div className="card-block spaCourseBox">
								<p>{student.Name}</p>
							</div>
						</div>
					</div>






				);
			});

			return courseMap;

		} else {
			return "";
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
		// Make get request to return a list of all the courses in our reducer    	
		this.props.studentSearchAction();
	}

	render() {

		return (
			<Loader Loaded={this.state.Loaded} className="loader">
				<div className="row">

					<div className="col-md-12" onClick={() => this.props.CourseSelectPage(page)}><Link to="/PageEdit">
						{this.mapCourseViews()}
					</div>
				</div>
			</Loader>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentSearch);