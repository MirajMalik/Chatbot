    import { useRef, useEffect} from "react";
    import   { ChatMessage }  from "../chat/ChatMessage";
    
    export function ChatMessages({ chatMessages }){
        const chatMessagesRef = useRef(null);


        useEffect(() => {                                    // useEffect for component to be created first . only then we can access the html .
            const containerElem = chatMessagesRef.current;   // this variable contains div HTML element  
            if (containerElem) {
                containerElem.scrollTop = containerElem.scrollHeight;
            }


        },[chatMessages])


        return(
            // this div will save into the chatMessagesRef container .
            <div className="mt-6 flex-1 overflow-y-auto scrollbar-none p-3" ref={chatMessagesRef}>     

            {chatMessages.map((chatMessage) => {
            // console.log("sender" +chatMessage);
                return(
                    <ChatMessage    
                        key = {chatMessage.id}
                        chatMessage = {chatMessage}
                    />        
                );

                })}

            </div>
        );
    }

