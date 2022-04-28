import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="a0fbbd5c-aa63-42d2-9d81-27e3bd08fa8e"
            userName="thesaintmarz"
            userSecret="12345"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
            />
    )
}

export default App ;