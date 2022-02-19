import { Component } from "react";
import "../styles/detailHeaderChat.css"

export default class DetailHeaderChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            status:0,
            userID:this.props.userID,
            loading:false
        }
    }
    userData = {};

    async componentDidUpdate(){
        if(this.state.userID !== this.props.userID){
            this.setState({
                loading:true,
                userID:this.props.userID
            })
            if(this.state.loading !== true){
                this.getUserDetails();
            }
        }
    }
    async getUserDetails(){
            var res = await fetch(`https://chat-app-watts.herokuapp.com/userstatus/${this.props.userID}`);
            var json = await res.json();  
            this.userData = json;  
        this.setState({
            loading:false
        })
    }
    render(){
        return(
            <div className="header-parent">
                <div className="header-image">
                    <img alt="profile" src={this.userData.display_picture} />
                </div>
                <div className="header-details">
                    <div className="activeName">
                        {this.userData.user_name}
                    </div>
                    <div className="person-status">
                        {
                            this.userData.user_status ? "online":"offline"
                        }
                    </div>
                </div>
            </div>
        );
    }
}