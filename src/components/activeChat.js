import { Component } from "react";
import "../styles/activeChat.css";
import DetailHeaderChat from "./detailHeaderChat";
import ActiveChatMessages from "./activeChatMessages";
import ChatInput from "./chatInput";

export default class ActiveChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            userID:this.props.activeChatUserID 
        }
    }
    async componentDidUpdate(){
        if(this.state.userID !== this.props.activeChatUserID){
            this.setState({
                userID:this.props.activeChatUserID
            })
        }
    }
    render(){
        if(this.state.userID === null){
           return(
                <div className="active-chat-parent">
                     <img alt="start new conversation" src="https://putatoeapp.web.app/img/chat/startConvo.png"/>
                </div>
             )
        }else{
            return (
                <div className="active-chat-parent">
                    <DetailHeaderChat userID={this.state.userID} />
                    <div className="bubble-input-container">
                    <ActiveChatMessages userID={this.state.userID} />
                    <ChatInput />
                    </div>
                </div>
            )
        }
    }
}