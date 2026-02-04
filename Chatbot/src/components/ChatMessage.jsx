import robotImage from '../assets/robot.png'
import usertImage from '../assets/user.png'

function ChatMessage({ message, sender }){
        
        return (

        <div className = {sender==='user' ? 'chat-message-user' : 'chat-message-robot'}>

            {sender==='robot' &&  (
                <img src={robotImage} className="chat-message-profile"  alt="robot" />
            )}

            <div className="chat-message-text">
                {message}
            </div>  

            {sender==='user'  &&   (
                <img src={usertImage} className="chat-message-profile" alt="user"  />
             )}
      
        </div>

        );

    }

    export default ChatMessage;