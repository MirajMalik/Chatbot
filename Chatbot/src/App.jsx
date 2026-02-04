import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
// import  ChatMessage    from './components/ChatMessage'   // default export systex to receive a single component

import {  Chatbot } from 'supersimpledev'


import './App.css'
   
// main component
function App(){
    //const array = React.useState([{
    const [chatMessages,setChatMessages] = useState([{
        message : 'hello chatbot' ,
        sender : 'user',
        id : crypto.randomUUID(),
        time: 1736127288920
    },{
        message : 'Hello! How can I help you?' ,
        sender : 'robot' ,
        id : crypto.randomUUID() ,
        time: 1736127291230

    },{
        message : 'test',
        sender : 'user' ,
        id : crypto.randomUUID() ,
        time: 1736127385356

    },{
        message : 'Sorry, I didnt quite understand that. Currently, I only know how to flip a coin, roll a dice, or get todays date. Let me know how I can help!', 
        sender : 'robot',
        id : crypto.randomUUID() ,
        time: 1736127385500
    }]);


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
    <div className="app-container">

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
