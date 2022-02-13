import '../styles/App.css';
import ChatList from './chatList';
import ActiveChat from './activeChat';

function App() {
  return (
    <div className="parent-container">
        <ChatList />
        <ActiveChat />
    </div>
  );
}

export default App;
