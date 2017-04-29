import React from 'react';

// Render the video field
export default (props) => {

    // reference
    const reference = props.Field.FieldReference;

    // Check what kind of file it is
    const extension = reference.substr(reference.length - 3);

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

                <div className="row">
                    <div className="col-xs-12">
                        <video className="spaStudentCourseVideo" controls>
                            <source src={reference} type={"video/" + extension} />
                            Your browser does not support this video
                        </video>
                    </div>
                </div>

                {content}
        </div>
    );
}