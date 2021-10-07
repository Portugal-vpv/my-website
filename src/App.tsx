import React from "react";
import NewMessageForm from './components/NewMessageForm/NewMessageForm';
import MessageForm from './components/MessageForm/MessageForm';

import "./App.css"

const App: React.FC = () =>
(
  <>
    <NewMessageForm />
    <MessageForm />
  </>
);



export default App;
