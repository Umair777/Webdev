import react, { useState } from 'react'
import { useContext } from "react";
import { MessageContext } from './messageContext';


export default function PageB({ message }) {
    const {text} = useContext(MessageContext);
  return (
    <h1>{text}</h1>
  );
}
