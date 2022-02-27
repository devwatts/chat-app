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
        console.log(this.props)
    }

    async handleRowClick(val){
        this.props.handleUser(val);
    };

    render(){
        return (
            <div className="chat-list">
                <ChatRow activeUser={this.props.activeChatUserID} clickHandler={this.handleRowClick.bind(this)} userData={this.props.userList} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;