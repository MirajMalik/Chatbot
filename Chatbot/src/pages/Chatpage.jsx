import { useState, useEffect } from "react";
import { ChatMessages } from "../components/chat/ChatMessages";
import { ChatInput } from "../components/chat/ChatInput";

export default function ChatPage() {

    const [chatMessages, setChatMessages] = useState([]);


    return (
        <div className="flex flex-col flex-1 px-10 h-screen">
            <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col">
                <ChatMessages
                    chatMessages={chatMessages}
                />
                <ChatInput 
                    chatMessages={chatMessages}
                    setChatMessages={setChatMessages}
                />
            </div>
        </div>
    );
}