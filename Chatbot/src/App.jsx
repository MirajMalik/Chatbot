import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import {  Chatbot } from 'supersimpledev'
import './App.css'
   
// main component
function App(){

    const [chatMessages,setChatMessages] = useState([]);

    useEffect(() => {                            
        Chatbot.addResponses({
            'goodbye' : 'Goodbye. Have a great day!',
            'give me a unique id' : function() {
                return `Sure! Here is a unique id: ${crypto.randomUUID()}`;
            }
        })

        // [] tells useEffect to only run once. We only want to run this setup code once because we only want to add these extra responses once.
       
    },[])

    return(
    <div className="max-w-xl mx-auto mt-3 p-5 h-[95vh] flex flex-col bg-slate-900 rounded-sm">

        <ChatMessages 
            chatMessages = {chatMessages} 
        />

        <ChatInput 
            chatMessages    = {chatMessages}
            setChatMessages = {setChatMessages} 
    />
    </div>

    );
}


export default App
