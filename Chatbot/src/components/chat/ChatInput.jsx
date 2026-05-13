import { useState } from "react";

    export function ChatInput({ chatMessages,setChatMessages }){

        const [inputText,setInputText] = useState('');

        function saveInputText(event){
            // event.target = gives us the element that we are typing in
            const value = event.target.value;
            setInputText(value);
        }

        async function sendMessage(){
            if (!inputText.trim()) return;

            const userMessage = {
                text: inputText,
                sender: "user",
                id: crypto.randomUUID(),
            };

            setChatMessages((prev) => [
                ...prev,
                userMessage
        ]);
            const currentInput = inputText;

            setInputText(''); // Remove text in the input field

            // robot responses
            const response = await fetch("/messages.json");

            const data = await response.json();

            const matchedResponse = data.find((item) => {
            return (
                    item.sender.question.toLowerCase() === currentInput.toLowerCase()
                );
            });

            const robotMessage = {
                text: matchedResponse ? matchedResponse.receiver.answer : "Sorry, I don't understand.",
                sender: "robot",
                id: crypto.randomUUID(),
                
            };

            setChatMessages((prev) => [                               // prev always contains latest state
                ...prev,             
                robotMessage
            ]);

            // console.log("updated chatMessages : ",  chatMessages);

        }

        return (
                <div className="flex p-5 mb-10">
                   <input 
                        className = "text-4 text-gray-600 px-4 py-3 rounded-lg border grow bg-white"
                        type="text" 
                        placeholder="Send a message to Chatbot" 
                        size="30"
                        //onChange = runs a function when we changes the text inside an <input>
                        onChange = {saveInputText}
                        value    = {inputText}
                    />
    
                    <button
                        onClick = {sendMessage}
                        className = "bg-[#198754] text-white px-5 py-3 rounded-md ml-3 border-none text-4 cursor-pointer"
                    
                    >Send</button>
                </div>
    
            );
        }  

