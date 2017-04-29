// Importing libraries
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import axios from 'axios';
import { profileAccess } from "../../actions/profile_access_action";
import { submitProfile } from "../../actions/profile_submit_action";


class Profile extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			request: '',
			fileName: '',
			file: '',
			imageUrl: ''};
		
		
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// getting user info from the server
	getUser(url) {
		$.getJSON(url, (request) =>{
			this.setState({
				request
			});
			
		});
	}

	// getting the image URL from the server
	getImage(url) {
		$.getJSON(url, (fileName) =>{
			this.setState({
				fileName
			});
			console.log(this.state.fileName)
		});
	}
	

	handleSubmit(e) {
		e.preventDefault();
		
		
	}

	
	componentDidMount(){
		// Calling the AJAX calls
		const url = "/SPA/getProfile";
		const imageUrl = "/SPA/getImageFile";
		this.getUser(url);
		this.getImage(imageUrl);
	}






	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];
		
		// loading the image to preview
		reader.onloadend = () => {
			this.setState({
				file: file,
				imageUrl: reader.result
			});
			
		}
		
		reader.readAsDataURL(file)
		// saving the image to the server
		let form_data= new FormData();
		form_data.append("file", file);
		submitProfile(form_data);

		

	}



	render(){
		let imageURL = "";
		// switching back and forth between the chosen images.
		if(this.state.imageUrl)
		{imageURL = this.state.imageUrl}
		else{
		imageURL = "images/uploaded_user_images/"+this.state.fileName;
		}
		
		return(

			 <div className="container">
                <div className="row">
                    <div className="col-xs-12 text-center">
						<h2>User Profile</h2>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<div className="col-xs-6 text-right">
							
							<h4>Student Name:</h4>
							<h4>Email:</h4>
		<h4>Location:</h4>
		<h4>Phone Number:</h4>
		<h4>Add Image:</h4>
							
	</div>
	<div className="col-xs-6 text-left">
							
		<h4>{this.state.request.FirstName+" "+ this.state.request.LastName}</h4>
		<h4>{this.state.request.Email}</h4>
		<h4>{(!!this.state.request.Location)? this.state.request.Location : "Not Listed"}</h4>
		<h4>{(!!this.state.request.PhoneNumber)? this.state.request.PhoneNumber : "Not Listed"}</h4>
		                <form onSubmit={(e)=>this.handleSubmit(e)}>
							<div className="input-group">
							  <input className="fileInput form-control"
									 style={{width:'250px'}}
	type="file" 
		name="file"
									 onChange={(e)=>this.handleImageChange(e)} />
	{/*
									 <span className="input-group-btn">
									 <button className="btn btn-default submitButton" 
									    	 style={{padding: '11px 15px'}}
									    	 type="submit" 
									    	 onClick={(e)=>this.handleSubmit(e)}>
									    	 <i className="fa fa-cloud-upload fa-lg" aria-hidden="true"></i></button>
									 </span> */}
							</div>
																
		                </form>
							<div style={{width: '300px', height: 'auto'}}>
							<img src={imageURL} width={250}/>
							 
							</div>

						</div>
					</div>
				</div>
			</div>
			
			);
	}






}

function mapStateToProps(state){
    return{
        data: state.getProfile
    }

}
			


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ submitProfile }, dispatch);
			}

export default connect( mapDispatchToProps)(Profile);