    import { useRef, useEffect} from "react";
    import { ChatMessage } from "./ChatMessage";
  
    // ChatMessages component

    export function ChatMessages({ chatMessages }){
        const chatMessagesRef = useRef(null);

        useEffect(() => {                              // useEffect for component to be created first . only then we can access the html .
            const containerElem = chatMessagesRef.current;   // this variable contains div HTML element  
            if (containerElem) {
                containerElem.scrollTop = containerElem.scrollHeight;
            }


        },[chatMessages])


        return(
            // this div will save into the chatMessagesRef container .
            <div className="chat-messages-container" ref={chatMessagesRef}>     

            {chatMessages.map((chatMessage) => {
                return(
                    <ChatMessage 
                        message = {chatMessage.message}
                        sender  = {chatMessage.sender}  
                        key     = {chatMessage.id}
                    />        
                );

                })}

            </div>
        );
    }

