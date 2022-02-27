//import App from "./App";
import LoginPage from "./loginPage";
import { useState } from "react";
import App from "./App";

function ParentApp() {
    const [userData,setUserData] = useState({});
    if(Object.keys(userData).length === 0){
        return (
            <LoginPage dataHandler={setUserData}></LoginPage>
          );
    }else{
        return (
            <App loggedUser={userData}></App>
        );
    }
    
  }
  
  export default ParentApp;