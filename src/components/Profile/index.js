// libraries
import React, {Component} from 'react';

// importing components

import UserInfo from '../../components/profile/user_info';

export default class UserProfile extends Component{



	render(){
		return (
			
					<div className="col-xs-12">
						<h1 className="text-center">User Profile </h1>
						<p>&nbsp;</p>					
													
						<UserInfo />						
				
												
					</div>
			
			
			);
	}

}
