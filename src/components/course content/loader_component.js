import React, {Component} from 'react';

export default class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	componentWillUnmount(){
		this.fadeOutLoader()
	}

	fadeOutLoader() {
		
		var el = document.getElementById('loader');
		el.style.opacity = 0;
		el.style.transition = "opacity 2s ease-out";
		
		
	}

	render(){

		return(
			<div className="spaLoaderContainer">
				<div id="loader" className="loader"></div>
			</div>
		);

	}
}
