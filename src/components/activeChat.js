import { Component } from "react";
import "../styles/activeChat.css";
import DetailHeaderChat from "./detailHeaderChat";
import ActiveChatMessages from "./activeChatMessages";
import ChatInput from "./chatInput";

export default class ActiveChat extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div className="active-chat-parent">
                <DetailHeaderChat />
                <div className="bubble-input-container">
                <ActiveChatMessages />
                <ChatInput />
                </div>
            </div>
        )
    }
}