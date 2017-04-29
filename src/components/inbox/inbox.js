import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageManager from '../../components/inbox/message_manager';
import MessageBody from '../../components/inbox/message_body';


export default class Inbox extends Component {
    constructor(props) {
        super(props);

    }

    render(){

        const boxStyle = {
                          height: '800px',
                          marginTop: '50px'};
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center">INBOX</h1>
                </div>
                <hr />

                <div className="row">
                    <div className = "col-sm-4" style = {boxStyle}>
                        <MessageManager />
                        </div>
                         <div className = "col-sm-8" style = {boxStyle}>
                             <div style={{height:'500px'}}>
                                <MessageBody />
                             </div>
                             <div>
                             <textarea rows="8" cols="82" placeholder="type on.."></textarea><br />
                             <button className="btn btn-primary pull-right">Send</button>
                             </div>
                        </div>
                        
                    </div>
            </div>
        );
    }
}