import robotImage from '../assets/robot.png'
import usertImage from '../assets/user.png'
import  dayjs from 'dayjs'
import './ChatMessage.css';


export function ChatMessage({ message, sender , time}){
      
        return (

        <div className = {sender==='user' ? 'chat-message-user' : 'chat-message-robot'}>

            {sender==='robot' &&  (
                <img src={robotImage} className="chat-message-profile"  alt="robot" />
            )}

            <div className="chat-message-text">
                {message}

                {time && (
                    <div className='chat-message-time'>
                        {dayjs(time).format('h:mma')}
                    </div>
            )}


            </div>  

            {sender==='user'  &&   (
                <img src={usertImage} className="chat-message-profile" alt="user"  />
             )}
      
        </div>

        );

    }

