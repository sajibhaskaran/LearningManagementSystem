// libraries
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
// actions and components
import { profileAccess } from "../../actions/profile_access_action";
import UserImage from '../../components/profile/user_image';
import Loader from '../../components/loader/loader';

class UserInfo extends Component{

	constructor(props){
		super(props)

	}


	componentDidMount(){
		// calling the action to get user info.
		this.props.profileAccess();
		
		
	}

	render(){
		// checking if props exists
		if(this.props.userData != null){
			
			
			return(
			
			<div className="parentDiv">
				<hr className="style-seven" />

				<div className="row">
					<hr className="style-two" />
					<div className="col-sm-6 col-xs-12">
						<h3>Student Name: </h3>
					</div>
						

					<div className="col-sm-6 col-xs-12">
						<h3>{this.props.userData.Name}</h3>
					</div>
					
				</div>
				<hr className="style-two" />

			<div className="row">
				
					<div className="col-sm-6 col-xs-12">
						<h3>Email: </h3>
					</div>

					<div className="col-sm-6 col-xs-12">
						<h3>{this.props.userData.Email}</h3>
					</div>
				</div>
				<hr className="style-two" />

			<div className="row">
					<div className="col-sm-6 col-xs-12">
						<h3>Phone Number: </h3>
					</div>

					<div className="col-sm-6 col-xs-12">
						<h3>{this.props.userData.Number}</h3>
					</div>
				</div>
				<hr className="style-two" />

			<div className="row">
					<div className="col-sm-6 col-xs-12">
						<h3>Location: </h3>
					</div>

					<div className="col-sm-6 col-xs-12">
						<h3>{this.props.userData.Location}</h3>
					</div>
				</div>
			  <hr className="style-two" />

			<div className="row">
					<div className="col-sm-6 col-xs-12">
						<h3>Start Date: </h3>
					</div>

					<div className="col-sm-6 col-xs-12">
						<h3>12/30/2016</h3>
					</div>
				</div>
				<hr className="style-two" />

				<div className="row">
					<div className="col-sm-6 col-xs-12">
						<h3>User Image: </h3>
					
					</div>
					<div className="col-sm-6 col-xs-12">
						<UserImage/>
					</div>
				</div>
				<hr className="style-two" />
			</div>
			);
		}
		else{
			return (<h2>Loading... </h2>);
		}
		
			
			
	
	}
	
}
function mapStateToProps(state){
	return{
		userData: state.userData
	}

}

	function mapDispatchToProps(dispatch){
		return bindActionCreators({profileAccess}, dispatch)
	}


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)








