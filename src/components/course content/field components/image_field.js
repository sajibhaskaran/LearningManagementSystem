import React from 'react';

// Takes in a field object for rendering an image
export default (props) => {

    try {
        // Check if there is a title for this image and set it if it isn't null
        const title = props.Field.FieldTitle === "N/A" ? "" : <h4>{props.Field.FieldTitle}</h4>;

        // Check if there is following content for the image and set it
        const content = <p>{props.Field.Content}</p>;

        return (
            <div className="col-xs-12">

                {title}

                <div className="text-center">
                    <img src={props.Field.FieldReference} />
                </div>

                <br />
                {content}
            </div>
        );
    } catch (e) {
        return <div></div>;
    }
}