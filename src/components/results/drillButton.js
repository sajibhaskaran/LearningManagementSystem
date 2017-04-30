import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class ResultsButton extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return( 
		<Link to={`/courseDrill/${this.props.courseId}`}>
		<button className="btn btn-primary reportButton text-center">				
		{this.props.name}				
		</button>
		</Link>				
			);
	}

}