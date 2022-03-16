import { Component } from "react";
import "../styles/activeChat.css";
import DetailHeaderChat from "./detailHeaderChat";
import ActiveChatMessages from "./activeChatMessages";
import ChatInput from "./chatInput";
const {postData} = require('../Api/apis')

export default class ActiveChat extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            activeUserID:this.props.userList.user_id,
            activeChatID:this.props.activeChatID,
            activeChatUserDetails:{},
            latestMessage:""
        }
    }

    async componentDidUpdate(){
        if(this.state.activeChatID !== this.props.activeChatID){
            this.setState({
                activeChatID:this.props.activeChatID
            },this.sortActiveChat);
        }
    }
    
    setLatestMessage = (message) => {
        this.setState({
            latestMessage:message
        })
    }
    async sortActiveChat(){
        for(let i = 0;i < this.props.userList.chats.length ; i++){
            if(this.props.userList.chats[i].chatID === this.props.activeChatID){
                this.setState({
                    activeChatUserDetails:this.props.userList.chats[i].participant_userDetails
                });
            }
        }
    }

    render(){
        console.log(this.props)
        if(this.state.activeChatID === null){
           return(
                <div className="active-chat-parent">
                     <img className="no-chat-img" alt="start new conversation" src="https://putatoeapp.web.app/img/chat/startConvo.png"/>
                </div>
             )
        }else{
            return (
                <div className="active-chat-parent">
                    <DetailHeaderChat userDetails={this.state.activeChatUserDetails} activeChatID={this.state.activeChatID} />
                    <div className="bubble-input-container">
                    <ActiveChatMessages newText={this.state.latestMessage} activeUserID={this.state.activeUserID} activeChatID={this.state.activeChatID} />
                    <ChatInput socket={this.props.socket} handleNewMessage={this.setLatestMessage} activeUserID={this.state.activeUserID} activeChatID={this.state.activeChatID} />
                    </div>
                </div>
            )
        }
    }
}