import { Component } from "react";
import '../styles/chatList.css';
import ChatRow from "./chatRow";

class ChatList extends Component{
    constructor(){
        super();
        this.state = {
            loading:false
        }
    }
    userData = [];

    async componentDidMount(){
        this.getUserList();
    }
    
    async getUserList(){
        if(this.state.loading !== true){
            this.setState({
                loading:true
            })
            var res = await fetch(`https://chat-app-watts.herokuapp.com/userlist/${1234}`);
            var json = await res.json();
            json.userList.map((data,index) => (
                this.userData.push(data)
            ));
            this.setState({
                loading:false
            })
        }
    }
    render(){
        return (
            <div className="chat-list">
                <ChatRow userData={this.userData} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;