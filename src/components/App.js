import '../styles/App.css';
import ChatList from './chatList';
import ActiveChat from './activeChat';
import {useState} from "react";

function App(props) {
  const [activeChatUserID,setActiveUser] = useState(null)
  console.log(props)
  function updateActiveUser(id){
    setActiveUser(id)
  }
  
  return (
    <div className="parent-container">
        <ChatList userList={props.loggedUser.chat_list} activeChatUserID={activeChatUserID} handleUser={updateActiveUser} />
        <ActiveChat userList={props.loggedUser.chat_list} activeChatUserID={activeChatUserID}/>
    </div>
  );
}

export default App;
