import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
// import  ChatMessage    from './components/ChatMessage'   // default export systex to receive a single component


import './App.css'
   
// main component
function App(){
        //const array = React.useState([{
        const [chatMessages,setChatMessages] = useState([{
            message : 'hello chatbot' ,
            sender : 'user',
            id : crypto.randomUUID()
        },{
            message : 'Hello! How can I help you?' ,
            sender : 'robot' ,
            id : crypto.randomUUID()

        },{
            message : 'test',
            sender : 'user' ,
            id : crypto.randomUUID()

        },{
            message : 'Sorry, I didnt quite understand that. Currently, I only know how to flip a coin, roll a dice, or get todays date. Let me know how I can help!', 
            sender : 'robot',
            id : crypto.randomUUID()
        }]);

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
