import '../styles/App.css';
import ChatList from './chatList';
import ActiveChat from './activeChat';
import {useState} from "react";

function App(props) {
  const [activeChatID,setActiveUser] = useState(null)


  function updateActiveUser(id){
    setActiveUser(id)
  }
  return (
    <div className="parent-container">
        <ChatList userList={props.loggedUser.chat_list} activeChatID={activeChatID} handleUser={updateActiveUser} />
        <ActiveChat userList={props.loggedUser.chat_list} activeChatID={activeChatID}/>
    </div>
  );
}

export default App;
