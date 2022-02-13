import { Component } from "react";
import '../styles/chatRow.css';

class ChatRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: props.active
        }
    }
    
    render(){
        return (
            this.props.userData.map((data,index) => (
                <div key={index} className="chat-row">
                    <div className="chat-row-image">
                         <img alt={data.name} src={data.profile} />
                   </div>
                   <div className="chat-row-text">
                         <div className="person-name">{data.name}</div>
                         <div className="person-latest-chat">{data.message}</div>
                    </div>               
                    <div className="chat-time">
                            {data.time}
                    </div>
                </div> 
            ))        
        )
    }
}

export default ChatRow;