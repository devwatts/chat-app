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
            index:0
        }
    }
    messages = [];   
     componentDidMount() {
        if(this.state.activeChatID !== null){
            this.getNewMessages();
        }
      }
      componentDidUpdate() {
          if(this.state.activeChatID !== this.props.activeChatID){
              this.setState({
                activeChatID:this.props.activeChatID
              })
          }
      }

    handleScroll = (event) => {
        if((event.target.scrollHeight - event.target.clientHeight) <= ((Math.abs(parseInt(event.target.scrollTop))) + 10)){
            this.setState({
                loading:true
            })
            if(this.state.loading !== true){
                this.getNewMessages();
            }
        }
    }

    async getNewMessages(){
        var json = await postData('chatdata',{chatID:this.state.activeChatID,index:this.state.index},"POST");
        console.log(json)
        json.data.messages.map((data,index) => (
            this.messages.push(data)
        )) 
        this.setState({
            loading:false,
        })
    }
    render(){
        console.log(this.props)
        return(
            <div onScroll={this.handleScroll} className="parent-container-messages">
                <MessageBubble activeUserID={this.props.activeUserID} messageData={this.messages} />
            </div>
        )
    }
}