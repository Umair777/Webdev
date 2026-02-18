import { useState } from 'react'
import './App.css'
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import { MessageContext } from './pages/messageContext';


function App() {
  const [text, setText] = useState("");
  
  return (
    <>
    <h1>Happiness Alert!</h1>
    <MessageContext.Provider value={{text, setText}}>
    <PageA />
    <PageB />
    </MessageContext.Provider>
    </>
  )
}

export default App
