import React from 'react';

// This component is for filling out an anchor tag field

export default (props) => {
    return (
        <div>

            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>
                            Link Title <span className="text-muted">(optional)</span>
                        </h4>
                    </div>
                    <div className="col-xs-12">
                        <input
                            className="form-control"
                            type="text"
                            value={props.FieldTitle}
                            onChange={(event) => props.onFieldTitleChange(event)}
                        />
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Link URL</h4>
                    </div>
                    <div className="col-xs-12">
                        <input
                            className="form-control"
                            type="text"
                            value={props.FieldReference}
                            onChange={(event) => props.onFieldReferenceChange(event)}
                        />
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Link Text</h4>
                    </div>
                    <div className="col-xs-12">
                        <textarea
                            className="form-control spaFieldTextArea"
                            type="text"
                            value={props.Content}
                            onChange={(event) => props.onContentChange(event)}
                        ></textarea>
                    </div>
                </div>
            </div>

        </div>
    );
}