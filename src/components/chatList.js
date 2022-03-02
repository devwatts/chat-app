import { Component } from "react";
import '../styles/chatList.css';
import ChatRow from "./chatRow";

class ChatList extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false
        }
    }

    async componentDidMount(){  
        
    }

    async handleRowClick(val){
        this.props.handleUser(val);
    };

    render(){
        return (
            <div className="chat-list">
                <ChatRow activeUser={this.props.activeChatID} clickHandler={this.handleRowClick.bind(this)} userData={this.props.userList.chats} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;