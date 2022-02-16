import { Component } from "react";
import "../styles/activeChatMessages.css";
import MessageBubble from "./messageBubble";

export default class ActiveChatMessages extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading:false,
            index:0
        }
    }
    messages = [];   
    componentDidMount() {
        document.title = `${this.state.loading}`;
        this.getNewMessages();
      }
      componentDidUpdate() {
        document.title = `${this.state.loading}`;
      }

    handleScroll = (event) => {
        if((event.target.scrollHeight - event.target.clientHeight) <= ((Math.abs(parseInt(event.target.scrollTop))) + 10)){
            this.setState({
                loading:true
            })
            if(this.state.loading !== true){
                this.getNewMessages()
            }
        }
    }

    async getNewMessages(index){
        var res = await fetch(`https://chat-app-watts.herokuapp.com/messages/1`);
        var json = await res.json();
        json.messages.map((data,index) => (
            this.messages.push(data)
        ))
        this.setState({
            loading:false,
        })
    }
    render(){
        console.log(this.messages)
        return(
            <div onScroll={this.handleScroll} className="parent-container-messages">
                <MessageBubble messageData={this.messages} />
            </div>
        )
    }
}