import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Testing extends Component {
    constructor(props) {
        super(props);

    }


    // keep in mind, this will all have to be generated mathematically, goal by timestamp and progress by checkpoints
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Testing</h1>
            </div>
        );
    }
}