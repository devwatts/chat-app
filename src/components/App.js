import '../styles/App.css';
import ChatList from './chatList';
import ActiveChat from './activeChat';
import {useState, useEffect} from "react";
const { io } = require("socket.io-client");

function App(props) {
  let socketInitial;
  const [latestMessage,setLatestMessage] = useState({chatID:"",message:{}});
  const [activeChatID,setActiveUser] = useState(null);
  const [activeChatParticipant, setActiveChatParticipant] = useState(null);
  const [socket,setSocket] = useState({});

  async function initializeSocket(){
    socketInitial = io('http://localhost:5000');
    socketInitial.on('connect', function () {
      socketInitial.emit('initialize',{
         userData:props.loggedUser
      });

   });
   setSocket(socketInitial);
  }

  useEffect(() => {
      if(props.loggedUser !== null && props.loggedUser !== undefined && Object.keys(socket).length === 0){
        initializeSocket();
      }
    })

  function updateListMessage(data){
    //console.log(message,chatID)
    setLatestMessage({
      message:data.message,
      chatID:data.chatID
    })
  }

  function updateActiveUser(id,particpant_id){
    setActiveChatParticipant(particpant_id.user_id)
    setActiveUser(id)
  }
  
  return (
    <div className="parent-container">
        <ChatList latestMessage={latestMessage} userList={props.loggedUser.chat_list} activeChatID={activeChatID} handleUser={updateActiveUser} />
        <ActiveChat latestMessageHandler={updateListMessage} socket={socket} activeChatParticipant={activeChatParticipant} userList={props.loggedUser.chat_list}  activeChatID={activeChatID}/>
    </div>
  );
}

export default App;
