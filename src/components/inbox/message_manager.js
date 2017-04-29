import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectMessage} from '../../actions/mock_messages_list_action';
import Hello from '../../components/inbox/single_message';


class MessageManager extends Component {
    
    
	componentWillMount() {
		console.log(this.props)
       
    }

    
   
    renderList(){
        const liStyle = {
            width: '250px',
            height: '50px',
            backgroundColor:'#1a2b51',
            listStle: 'none',
            marginTop: '10px',
            color: 'white',
            fontSize: '20px',
            textAlign:'center',
            paddingTop: '10px',
            borderRadius: '5px'
       
        };
        return this.props.messages.map((message, id) => {
            return (
                <div key = {id}  onClick={()=>this.props.selectMessage(message)}>
                    <Hello style = {liStyle} name= {message.name} />
               </div>
                )
        });
    }

    
                render(){
        
                    return(
                        <div>           
                        <ul>
                            {this.renderList()}
            
                        </ul>                      
                        </div>
            
            
            
            );
        }
}


function mapStateToProps(state){
    return{
        messages: state.MessageList
    }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectMessage:selectMessage}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MessageManager);
