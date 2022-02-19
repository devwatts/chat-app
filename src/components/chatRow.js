import { Component } from "react";
import '../styles/chatRow.css';

class ChatRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            active: props.active
        }
    }
    sendClickedRow = (val) => {
        this.props.clickHandler(val);
    }
    render(){
        return (
            this.props.userData.map((data,index) => (
                <div onClick={() => this.sendClickedRow(data.user_id)} key={index} className={this.props.activeUser === data.user_id ? "chat-row active-chat-row":"chat-row"}>
                    <div className="chat-row-image">
                         <img alt={data.name} src={data.display_picture} />
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