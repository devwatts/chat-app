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
    userData = [];

    async componentDidMount(){
        this.getUserList();
    }

    async handleRowClick(val){
        this.props.handleUser(val);
    };

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
                <ChatRow activeUser={this.props.activeUserID} clickHandler={this.handleRowClick.bind(this)} userData={this.userData} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;