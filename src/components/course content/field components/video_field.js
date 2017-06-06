import React from 'react';

// Render the video field
export default (props) => {

    // reference
    const reference = props.Field.FieldReference;

    // Check what kind of file it is
    const extension = reference.substr(reference.length - 3);

    // Render Video
    let video = (
        <video className="spaStudentCourseVideo" controls>
                            <source src={reference} />
                            Your browser does not support this video
                        </video>
    );

    // Check if this needs to be embeded or not
    switch(extension.toLowerCase()){
        case "mp4":
            break;
        case "ogg":
            break;
        default:
            video = (
              <iframe allowFullScreen="true" width="100%" style={{minHeight: "50vh"}} src={reference}>
                  </iframe>
            );
    }

    // Check for title
    const title = props.Field.FieldTitle === "N/A"
        ? "" :
        <div className="row">
            <div className="col-xs-12">
                <h4>{props.Field.FieldTitle}</h4>
            </div>
        </div>;

    // Check for content
    const content = props.Field.Content === ""
        ? "" :
        <div className="row">
            <div className="col-xs-12">
                <p>{props.Field.Content}</p>
            </div>
        </div>;
	
    return (
        <div className="col-xs-12">

                {title}

				<div className="embed-responsive embed-responsive-16by9">
                   
                        {video}
                   
                </div>

                {content}
        </div>
    );
}