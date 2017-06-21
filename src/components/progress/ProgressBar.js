import React from 'react';

const ProgressBar = (props) => {
	// bar style
	let barStyle = {
		width: props.percentDone + "%"
	}
	if (props.percentDone >= 1) {
		barStyle = {
			minWidth: 100,
			width: props.percentDone + "%"
		}
	}
	let goalStyle = {
		width: props.percentShouldHaveDone + "%"
	}
	if (props.percentShouldHaveDone >= 1) {
		goalStyle = {
			minWidth: 100,
			width: props.percentShouldHaveDone + "%"
		}
	}
	// passing in the props
	return (		
		<div>
			<div className="text-center" >
				<h3>{props.name}</h3>
			</div>

				<div className="progress">
					<div
						className="progress-bar progress-bar-striped active progress-bar-info"
						role="progressbar"
						style={barStyle}
						aria-valuenow="80"
						aria-valuemin="0"
						aria-valuemax="100">My Progress: {props.percentDone + "%"}
					</div>
				</div>

				<div className="progress">
					<div
						className="progress-bar progress-bar-danger"
						role="progressbar"
						style={goalStyle}
						aria-valuenow="1000"
						aria-valuemin="0"
						aria-valuemax="100">My Goal: {props.percentShouldHaveDone + "%"}
					</div>
				</div>
		</div>
		
		);
}
// exporting the component
export default ProgressBar;