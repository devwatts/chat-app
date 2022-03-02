import { Component } from "react";
import "../styles/detailHeaderChat.css"

export default class DetailHeaderChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            status:0,
            activeChatID:this.props.activeChatID,
            activeChatUserData:this.props.userDetails,
            loading:false
        }
    }

    async componentDidUpdate(){
        if(this.state.activeChatUserData !== this.props.userDetails){
            this.setState({
                activeChatUserData:this.props.userDetails,
                status:this.props.userDetails.status
            });
        }
    }


    render(){
        console.log(this.state)
        return(
            <div className="header-parent">
                <div className="header-image">
                    <img alt="profile" src={this.state.activeChatUserData.profile_picture} />
                </div>
                <div className="header-details">
                    <div className="activeName">
                        {this.state.activeChatUserData.full_name}
                    </div>
                    <div className="person-status">
                        {
                            this.state.status ? "online":"offline"
                        }
                    </div>
                </div>
            </div>
        );
    }
}