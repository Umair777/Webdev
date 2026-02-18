import react, { useState } from 'react'
import {useContext} from 'react';
import { MessageContext } from './messageContext';

export default function PageA() {
  const { setText } = useContext(MessageContext);
  return (
    <>
    <h1> Hello from Umair</h1>
    <input
        onChange={(action) => setText(action.target.value)}
        placeholder = "Type something"
    />
    </>
  );
}

// export default function PageA() {
//   const { setText } = useContext(MessageContext);
//   return (
    // <div>
    //   <h1>Hello from Umair</h1>
    //   <input
    //     onChange={(e) => setMessage(e.target.value)}
    //     placeholder="Type something"
    //   />
    // </div>
//     
//   );
// }
