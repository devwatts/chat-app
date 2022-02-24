//import App from "./App";
import LoginPage from "./loginPage";
import { useState } from "react";
import App from "./App";

function ParentApp() {
    const [username,setUsername] = useState("");
    if(username === ""){
        return (
            <LoginPage usernameHandler={setUsername}></LoginPage>
          );
    }else{
        return (
            <App></App>
        );
    }
    
  }
  
  export default ParentApp;