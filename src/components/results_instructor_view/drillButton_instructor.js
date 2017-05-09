import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ResultsButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		switch (this.props.name) {
			case 'Drill':
				// link to drill component
				return (
					<Link to={`/instructorDrillResult/${this.props.userInfo}`}>
						<button className="btn btn-primary reportButton text-center">
							{this.props.name}
						</button>
					</Link>
				);
				break;
			case 'Tests':
				
				// link to essay component
				return (
					<Link to={`/instructortestResult/${this.props.userInfo}`}>
						<button className="btn btn-primary reportButton text-center">
							{this.props.name}
						</button>
					</Link>
				);
				break;
			case 'Daily':
				// link to daily component
				
				return (
					<Link to={`/instructorDailyReportResult/${this.props.userInfo}`}>
						<button className="btn btn-primary reportButton text-center">
							{this.props.name}
						</button>
					</Link>
				);
				break;
			case 'Weekly':
				// link to daily component
				return (
					<Link to={`/instructorWeeklyReportResult/${this.props.userInfo}`}>
						<button className="btn btn-primary reportButton text-center">
							{this.props.name}
						</button>
					</Link>
				);
				break;
		}


	}

}