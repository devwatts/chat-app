import { Component } from "react";
import "../styles/detailHeaderChat.css"

export default class DetailHeaderChat extends Component{
    constructor(props){
        super(props);

        this.state = {
            status:0
        }
    }
    render(){
        return(
            <div className="header-parent">
                <div className="header-image">
                    <img alt="profile" src="https://i.ibb.co/SXFP9wQ/pluming-Installation-dubai-uae.jpg" />
                </div>
                <div className="header-details">
                    <div className="activeName">
                        {this.props.userID}
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