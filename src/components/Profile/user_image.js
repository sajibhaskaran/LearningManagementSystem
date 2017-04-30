// libraries
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
// actions
import { submitProfile } from "../../actions/profile_submit_action";
import { imageAccess } from "../../actions/profile_image_access_action"
import { imageAccessCallback } from "../../actions/Callback/image_access_callback_action";
import { imageUpdate } from '../../actions/Callback/image_update_action';

class UserImage extends Component {
	constructor(props){
		super(props)

		this.state = {
			file: '',

			imageUrl: "images/uploaded_user_images/"+this.props.image.data
		
		};
		
		//this.handleImageChange = this.handleImageChange.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}


	componentWillReceiveProps(nextProps){
		if(nextProps.imageLoad === true){
			// turning the nextProps to false
			this.props.imageAccessCallback();
			this.props.imageUpdate()
			
		}
		

	}




	handleSubmit(e) {
		// preventing the default event action.
		e.preventDefault();
		
		
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
		this.props.submitProfile(form_data);
		

	}

	


	render(){
		
		if(this.props != null && this.props.image.data !== ""){
			

			return(

				
				<div>							
		                <form onSubmit={(e)=>this.handleSubmit(e)}>
							<div className="input-group">
							  <input className="fileInput form-control"
									style={{width:'250px'}}
									type="file" 
									name="file"
									onChange={(e)=>this.handleImageChange(e)} />
									
							</div>
																
		                </form>
							<div style={{width: '300px', height: 'auto'}}>
							<img src={this.state.imageUrl} width={250}/>
							 
							</div>

				</div>				
			
			);
			}else{
				return(

				
					<div>							
							<form onSubmit={(e)=>this.handleSubmit(e)}>
								<div className="input-group">
								  <input className="fileInput form-control"
										style={{width:'250px'}}
										type="file" 
										name="file"
										onChange={(e)=>this.handleImageChange(e)} />
									
					</div>
																
							</form>
								<div style={{width: '300px', height: 'auto'}}>
								
							 
							</div>

					</div>				
			
			);
			
			}
		
		
}



}


function mapStateToProps(state){
	return { image: state.ImageAccess,
	imageLoad:state.Profile};

}

function mapDispatchToProps(dispatch) {
	return  bindActionCreators({
		imageAccess,
		imageAccessCallback,
		imageUpdate,
		submitProfile}, 
		dispatch
		);
		
}

export default connect(mapStateToProps,mapDispatchToProps)(UserImage);


