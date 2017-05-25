import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { imageAccess } from "../actions/profile_image_access_action"

class GetAvatar extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount(){
		// calling the action to get user info.
		this.props.imageAccess();	
		
		
	}
	/*
	componentWillReceiveProps(nextProps){
		//this.forceUpdate();
		//location.reload()
		if(typeof this.props.image.data !== "undefined") {
			
			
			//window.location.hash = "#/";
			//window.location.hash+="Profile";

			//location.reload();
		}
		
	}
	*/

	render(){
		if(this.props != null && typeof this.props.image.data !== "undefined" && this.props.image.data !== ""){
			
			let imgURL = "images/uploaded_user_images/"+this.props.image.data
			return(
						<div className="avatar">
						<img className= "img-responsive img-circle img-rounded" src ={imgURL} alt={"avatar"}/>
						</div> 
			
			
			);
		}
		else{
			return null;
		}

	}

}

function mapStateToProps(state) {
	return { image: state.ImageAccess };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({imageAccess}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(GetAvatar);
