import React from 'react';

// Render the definition component
export default (props) => {

    // Check for the definition title
    const title = props.Field.FieldTitle === "N/A" ? "" : <strong>{props.Field.FieldTitle}: </strong>;

    return (
        <div className="col-xs-12">
            <div className="col-xs-12">

                <p>{title}{props.Field.Content}</p>

            </div>
        </div>
    );
}