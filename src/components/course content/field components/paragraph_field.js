import React from 'react';

// This will return a paragraph field populated by a field on a course page
export default (props) => {

    // Check if the title field was used
    const title = props.Field.FieldTitle === "N/A" ? "" : <h5>{props.Field.FieldTitle}</h5>;

    return (
        <div className="col-xs-12">
            {title}
            <p  className="spaStudentCourseParagraph">{props.Field.Content}</p>
        </div>
    );
}