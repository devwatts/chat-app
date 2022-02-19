import { Component } from "react";
import "../styles/activeChat.css";
import DetailHeaderChat from "./detailHeaderChat";
import ActiveChatMessages from "./activeChatMessages";
import ChatInput from "./chatInput";

export default class ActiveChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            userID:this.props.activeUserID 
        }
    }
    async componentDidUpdate(){
        if(this.state.userID !== this.props.activeUserID){
            this.setState({
                userID:this.props.activeUserID
            })
        }
    }
    render(){
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