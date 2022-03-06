import { Component } from "react";
import "../styles/chatInput.css";
const {postData} = require('../Api/apis');

export default class ChatInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading:false
        }
    }
    async sendNewMessage(bool,event){
        var messageText = document.getElementById('text-message').value;
        if(bool === 1){
            if(event.key === "Enter" && event.shiftKey !== true){
                await postData("sendmessage",{chatID:this.props.activeChatID,userID:this.props.activeUserID,messageText:messageText},"POST")
                document.getElementById('text-message').value = "";
            }
        }else{
            if(document.getElementById('text-message').value !== ""){
                await postData("sendmessage",{chatID:this.props.activeChatID,userID:this.props.activeUserID,messageText:messageText},"POST")
                document.getElementById('text-message').value = "";
            }
        }
    }
    render(){
        return(
            <div className="chat-input-parent">
                <div className="textarea-parent">
                    <textarea onKeyDown={(e) => this.sendNewMessage(1,e)} id="text-message"></textarea>
                </div>
                <div className="send-btn-parent">
                    <button onClick={() => this.sendNewMessage()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg></button>
                </div>
            </div>
        )
    }
}