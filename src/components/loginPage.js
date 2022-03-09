import { Component } from "react/cjs/react.production.min";
import '../styles/loginPage.css';
const {postData} = require('../Api/apis')

export default class LoginPage extends Component{
    constructor(props){
        super(props);


    }
    async createNewUser(){
        let username = prompt("Enter the username for new account");
        let result = await postData('usernameavailability',{username:username},"POST");
        let password = "";
        if(result.status){
            password = prompt("Enter your password");
            let userCreationBoolean = await postData('createnewaccount',{username:username,password:password},'POST');
            console.log(userCreationBoolean);
        }else{
            alert(result.error)
        }
    }
    async logUserIn(key){
        if(key === undefined || key === "Enter"){
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var loginStatus = await postData("login",{username:username,password:password},"POST");
        if(loginStatus.status === true){
            this.updateLoggedUser(loginStatus.userData)
        }else{
            alert("Incorrect password/username")
        }
        }
    }
    updateLoggedUser = (data) => {
        this.props.dataHandler(data)
    }
    render(){
        return(
            <div className="login-parent">
                <div className="login-card">
                    <p className="project-intro">Hello, This is devs chat, an opensource realtime chatting platform</p>
                    <div className="input-container">
                    <input placeholder="Enter your username" id="username" type="text"/>
                    <input onKeyDown={(e) => this.logUserIn(e.key)} placeholder="Enter your password" id="password" type="password"/>
                    </div>
                    <div className="button-container">
                    <button onClick={() => this.logUserIn()}>LOGIN</button>
                    <button onClick={() => this.createNewUser()}>New?</button>
                    </div>
                </div>
            </div>
        )
    }
}