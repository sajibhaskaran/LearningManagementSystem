import React, {Component} from 'react';
import {connect} from 'react-redux';

class MessageBody extends Component {

    renderList(){
        const pStyle = {
            width: '250px',
            height: 'auto',
            backgroundColor:'lightyellow',            
            marginTop: '10px',
            color: 'darkblue',
            fontSize: '20px',
            textAlign:'center',
            paddingTop: '10px',
            borderRadius: '5px'
       
        };
        return this.props.message.receiveMessages.map((item, id) => {
            return (
                <p key={id} style= {pStyle}>{item}</p>
                )
                });
                }


    render() {
        if(!this.props.message){
            return(<h4>Please select a name..</h4>)
        }
        return(
          <div>
          
         {this.renderList()}
          </div>
        );

          }
}

function mapStateToProps(state){
    return {
        message: state.SelectMessage
    };

}

export default connect(mapStateToProps)(MessageBody);
