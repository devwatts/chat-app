import { Component } from "react/cjs/react.production.min";
import '../styles/loginPage.css';
const {postData} = require('../Api/apis')

export default class LoginPage extends Component{
    constructor(props){
        super(props);


    }
    async logUserIn(){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        /*if(username === password){
            this.updateLoggedUser(username)
        } */
        var loginStatus = await postData("login",{username:username,password:password},"POST");
        if(loginStatus.status === true){
            this.updateLoggedUser(loginStatus.userData)
        }else{
            alert("Incorrect password/username")
        }
    }
    updateLoggedUser = (data) => {
        this.props.dataHandler(data)
    }
    render(){
        return(
            <div className="login-parent">
                <div className="login-card">
                    <input id="username" type="text"/>
                    <input id="password" type="password"/>
                    <button onClick={() => this.logUserIn()}>LOGIN</button>
                </div>
            </div>
        )
    }
}