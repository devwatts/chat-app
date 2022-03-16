import { Component } from "react";
import "../styles/activeChatMessages.css";
import MessageBubble from "./messageBubble";
const {postData} = require('../Api/apis');

export default class ActiveChatMessages extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading:false,
            activeChatID:this.props.activeChatID,
            index:0,
            newText:this.props.newText,
            messages:[]
        }
    }
    
     componentDidMount() {
        if(this.state.activeChatID !== null){
            this.getNewMessages();
        }
      }
      componentDidUpdate() {
          if(this.state.activeChatID !== this.props.activeChatID){
              this.setState({
                activeChatID:this.props.activeChatID,
                index:0
              },() => {
                  document.getElementById('active-chat-messages').innerHTML = "";
                this.getNewMessages();
              })
          }
          if(this.state.newText !== this.props.newText){
              var messagesNewArray = [this.props.newText].concat(this.state.messages);
              this.setState({
                  newText:this.props.newText,
                  messages:messagesNewArray
              })
          } 
      }

    handleScroll = (event) => {
        if(this.state.index !== -1){
            if((event.target.scrollHeight - event.target.clientHeight) <= ((Math.abs(parseInt(event.target.scrollTop))) + 10)){
                this.setState({
                    loading:true
                })
                if(this.state.loading !== true){
                    this.getNewMessages();
                }
            }
        }
    }

    async getNewMessages(){
        var messages = [];
        var json = await postData('chatdata',{chatID:this.state.activeChatID,index:this.state.index},"POST");
        if(json.data.messages !== null && json.data.newIndex !== -1){
            json.data.messages.map((data,index) => (
                messages.push(data)
            )) 
            this.setState({
                index:json.data.newIndex,
                loading:false,
                messages:this.state.messages.concat(messages)
            })
        }else{
            this.setState({
                index:-1,
                loading:false,
            })
        }
    }
    render(){
        return(
            <div onScroll={this.handleScroll} id="active-chat-messages" className="parent-container-messages">
                <MessageBubble activeUserID={this.props.activeUserID} messageData={this.state.messages} />
            </div>
        )
    }
}