import { Component } from "react/cjs/react.production.min";
import '../styles/loginPage.css';

export default class LoginPage extends Component{
    constructor(props){
        super(props);


    }
    logUserIn = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if(username === password){
            this.updateLoggedUser(username)
        }
    }
    updateLoggedUser = (username) => {
        this.props.usernameHandler(username)
    }
    render(){
        return(
            <div className="login-parent">
                <div className="login-card">
                    <input id="username" type="text"/>
                    <input id="password" type="password"/>
                    <button onClick={() => this.logUserIn("oihoi")}>LOGIN</button>
                </div>
            </div>
        )
    }
}