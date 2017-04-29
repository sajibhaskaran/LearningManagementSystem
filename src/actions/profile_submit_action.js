import axios from 'axios';

export const SUBMIT_PROFILE = 'SUBMIT_PROFILE';

export function submitProfile(file) {

	$.ajax({
		url: "/SPA/Profile",
		dataType: 'script',
		cache: false,
		contentType: false,
		processData: false,
		data: file,
		type: 'post'

	});
	//const url = "/SPA/Profile";
	//const config = {headers: {'content-type': 'multipart/form-data'}};
	
	//axios.post(url, {data: file}, config)
	//	.then(function(response){
	//		console.log("success");
	//		})
	//	.catch(function (error) {
    //        console.log(error);
    //    });
	window.location.hash = "#/Profile";

	return {
		type: SUBMIT_PROFILE,
		payload: file
	};
}