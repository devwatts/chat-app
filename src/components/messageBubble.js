import { Component } from "react";
import "../styles/messageBubble.css";

export default class MessageBubble extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeUserID:this.props.activeUserID
        }
    }
    render(){
        return(
            this.props.messageData.map((data,index) => (
                    <div key={index} className={this.state.activeUserID === data.sender_userID ? "message-sender":"message-reciever"}>
                            <div>{data.message_text}</div>
                    </div>
            ))
        )
    }
}