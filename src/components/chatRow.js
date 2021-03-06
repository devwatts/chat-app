import { Component } from "react";
import '../styles/chatRow.css';

class ChatRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: props.active,
            latestMessage:this.props.latestMessage
        }
    }
    sendClickedRow = (val,val2) => {
        this.props.clickHandler(val,val2);
    }
    componentDidUpdate(){
        //console.log(this.props)
        //console.log(this.state)
        if(this.props.latestMessage.message.message_text !== this.state.latestMessage.message.message_text){
            this.setState({
                latestMessage:this.props.latestMessage
            })
        }
    }
    render(){
        return (
            this.props.userData.map((data,index) => (
                <div onClick={() => this.sendClickedRow(data.chatID,data.participant_userDetails)} key={index} className={this.props.activeUser === data.chatID ? "chat-row active-chat-row":"chat-row"}>
                    <div className="chat-row-image">
                         <img alt={data.participant_userDetails.full_name} src={data.participant_userDetails.profile_picture} />
                   </div>
                   <div className="chat-row-text">
                         <div className="person-name">{data.participant_userDetails.full_name}</div>
                         <div className="person-latest-chat">{this.state.latestMessage.chatID === data.chatID ? this.state.latestMessage.message.message_text : data.lastMessage}</div>
                    </div>               
                    <div className="chat-time">
                            {data.time}
                    </div>
                </div> 
            ))        
        )
    }
}

export default ChatRow;