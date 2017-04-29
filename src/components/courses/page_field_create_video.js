import React from 'react';

export default (props) => {

    return (
        <div>

            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-xs-12">
                        <h4>
                            Video Title <span className="text-muted">(optional)</span>
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
                        <h4>Video URL</h4>
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
                        <h4>Video Description <span className="text-muted">(optional)</span></h4>
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