import React from 'react';

export default (props) => {

    // Render a title if there is one
    const title = props.Field.FieldTitle === "N/A" ? <div></div> : <h6>{props.Field.FieldTitle}</h6>;

    // Link to another tab
    const link = <a href={props.Field.FieldReference} target="_blank">{props.Field.Content}</a>;

    return (
        <div className="col-xs-12">
            <div className="col-xs-12">

                {title}
                {link}

            </div>
        </div>
    );
}