import { Component } from "react";
import "../styles/activeChatMessages.css";
import MessageBubble from "./messageBubble";

export default class ActiveChatMessages extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading:false
        }
    }

    render(){
        var messages = [
            {
                text:"t is a long established fact that a reader will be distracted by the readable content o",
                sender:false
            },
            {
                text:" opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, an",
                sender:true
            },
            {
                text:"sure there isn't anything embarrassing hidden in the middle of text. All the Lo",
                sender:false
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:true
            },
            {
                text:"Lorem ipsum dolor sit amet.., comes from a line i",
                sender:false
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:true
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:true
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:false
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:true
            },
            {
                text:"hueugh the cites of the word in classical literature, discovered the undoubtahue",
                sender:false
            },

        ]
        return(
            <div className="parent-container-messages">
                <MessageBubble messageData={messages} />
            </div>
        )
    }
}