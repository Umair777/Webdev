import react, { useState } from 'react'

export default function PageA({ setMessage }) {
  return (
    // <div>
    //   <h1>Hello from Umair</h1>
    //   <input
    //     onChange={(e) => setMessage(e.target.value)}
    //     placeholder="Type something"
    //   />
    // </div>
    <>
    <h1> Hello from Umair</h1>
    <input
    
        onChange={(action) => setMessage(action.target.value)}
        placeholder = "Type something"
    />
    </>
  );
}