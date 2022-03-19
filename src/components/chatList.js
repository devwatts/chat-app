import { Component } from "react";
import { postData } from "../Api/apis";
import '../styles/chatList.css';
import ChatRow from "./chatRow";

class ChatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            activeChats:this.props.userList.chats
        }
    }

    async componentDidMount(){  

    }
        
    async sendMessageToNewUser(){
        var username = prompt("Enter the username");
        if(username !== null && username !== undefined && username !== ""){
            let usernameExistance = await postData('validateusername',{username:username,loggedUser:this.props.userList.user_id},"POST");
            if(usernameExistance.status === true){
                let newMessage = prompt("Enter the message");
                if(newMessage !== "" && newMessage !== null){
                    let response = await postData('sendnewmessage',{recieverUserID:usernameExistance.userID,loggedUserID:this.props.userList.user_id,message:newMessage},"POST");
                    console.log(response)
                    if(response.status === false){
                        alert(response.error);
                    }
                    this.setState({
                        activeChats:response.data.chats
                    })
                }
            }else{
                alert(usernameExistance.error);
            }
        }
    }

    async handleRowClick(val,val2){
        this.props.handleUser(val,val2);
    };

    render(){
        //console.log(this.props)
        return (
            <div className="chat-list">
                <div>
                    <button onClick={() => this.sendMessageToNewUser()} className="sendNewMessageButton">+</button>
                </div>
                <ChatRow latestMessage={this.props.latestMessage} activeUser={this.props.activeChatID} clickHandler={this.handleRowClick.bind(this)} userData={this.state.activeChats} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;