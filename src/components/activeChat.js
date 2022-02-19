import { Component } from "react";
import "../styles/activeChat.css";
import DetailHeaderChat from "./detailHeaderChat";
import ActiveChatMessages from "./activeChatMessages";
import ChatInput from "./chatInput";

export default class ActiveChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            user:"Jasneet Singh" 
        }
    }

    render(){
        return (
            <div className="active-chat-parent">
                <DetailHeaderChat user={this.state.user} />
                <div className="bubble-input-container">
                <ActiveChatMessages />
                <ChatInput />
                </div>
            </div>
        )
    }
}