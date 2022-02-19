import '../styles/App.css';
import ChatList from './chatList';
import ActiveChat from './activeChat';
import {useState} from "react";

function App() {
  const [activeUserID,setActiveUser] = useState(null)
  
  function updateActiveUser(id){
    setActiveUser(id)
  }
  
  return (
    <div className="parent-container">
        <ChatList activeUserID={activeUserID} handleUser={updateActiveUser} />
        <ActiveChat activeUserID={activeUserID}/>
    </div>
  );
}

export default App;
