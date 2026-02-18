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

// function App() {
//   const [message, setMessage] = useState("");

//   return (
//     <>
//     <h1>Happiness Alert!</h1>
//     <PageA setMessage={setMessage} />
//     <PageB message={message} />
//     </>
//   )
// }

// export default App
 // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    