import { Component } from "react";
import '../styles/chatList.css';
import ChatRow from "./chatRow";

class ChatList extends Component{
    render(){
        const userData = [
            {
            name:"Dev",
            time:"9:10",
            profile:"https://i.ibb.co/SXFP9wQ/pluming-Installation-dubai-uae.jpg",
            message:"Hello there!"
            },
            {
            name:"Prerna",
            time:"9:10",
            profile:"https://i.ibb.co/SXFP9wQ/pluming-Installation-dubai-uae.jpg",
            message:"Hello there!"
            },
            {
            name:"Jasneet",
            time:"9:10",
            profile:"https://i.ibb.co/SXFP9wQ/pluming-Installation-dubai-uae.jpg",
            message:"Hello there!"
            }
    ]
        return (
            <div className="chat-list">
                <ChatRow userData={userData} ></ChatRow>
            </div>
        )
    }
}

export default ChatList;