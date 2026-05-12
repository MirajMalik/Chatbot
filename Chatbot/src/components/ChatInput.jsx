// ChatInput Component
import { useState} from "react";
import {  Chatbot } from 'supersimpledev'
import './ChatInput.css';
import  dayjs from 'dayjs'

    export function ChatInput({ chatMessages,setChatMessages }){

        const [inputText,setInputText] = useState('');


        function saveInputText(event){
            // event.target = gives us the element that we are typing in
            const value = event.target.value;
            setInputText(value);
        }

        function sendMessage(){

            // creating a variable so that it can remember the value . state doesnt update immediately , it updated when all the code is finished. if we dont
            // save the data , react will not update this and will update the response data only .
            const newChatMessages = [
                ...chatMessages,
                {
                    message : inputText,
                    sender  : 'user',
                    id      : crypto.randomUUID(),
                    time    : dayjs().valueOf()
                }
            ]


            setChatMessages(newChatMessages);


            const response = Chatbot.getResponse(inputText);    // responses come from external library

              setChatMessages([
                ...newChatMessages,
                {
                    message : response,
                    sender  : 'robot',
                    id      : crypto.randomUUID(),
                    time    : dayjs.valueOf()
                }
            ]);
            

            setInputText('');                                    // removes text in the input field after the send button clicked

        }

        return (
                <div className="input-container">
                   <input 
                        className = "chat-input"
                        type="text" 
                        placeholder="Send a message to Chatbot" 
                        size="30"
                        //onChange = runs a function when we changes the text inside an <input>
                        onChange = {saveInputText}
                        value    = {inputText}
                    />
    
                    <button
                        onClick = {sendMessage}
                        className = "send-button"
                    
                    >Send</button>
                </div>
    
            );
        }  

