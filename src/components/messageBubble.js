import { Component } from "react";
import "../styles/messageBubble.css";

export default class MessageBubble extends Component{

    render(){
        return(
            this.props.messageData.map((data,index) => (
                    <div key={index} className={data.sender ? "message-sender":"message-reciever"}>
                            <div>{data.text}</div>
                    </div>
            ))
        )
    }
}