import React from 'react';
import './App.css'

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';


const App = () => {
  return (
    <div>
    {/* calling ChatEngine as a component and adding its props */}
      <ChatEngine
          height="100vh"
          projectID="bedc7522-d66a-4181-8223-96d55762b394"
          userName="Edmondcharley"
          userSecret="199811"
          renderChatFeed={( afterofficeChatAppProps) => <ChatFeed { ... afterofficeChatAppProps} />}
      />
    </div>
  );
}

export default App;
