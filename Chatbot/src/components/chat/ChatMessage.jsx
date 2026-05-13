import robotImage from '../../assets/robot.png'
import usertImage from '../../assets/user.png'


export function ChatMessage({ chatMessage }){
        const { sender, text } = chatMessage;
        
        return (
            <div className = {sender==='user' ? 'flex justify-end items-start' : 'flex items-start'}>

                {sender==='robot' &&  (
                    <img src={robotImage} className="w-12"  alt="robot" />
                )}

                <div className="bg-gray-200 text-black px-5 py-4 rounded-md mx-3 mb-5 max-w-80">
                    {text}
                </div>  

                {sender==='user'  &&   (
                    <img src={usertImage} className="w-12" alt="user"  />
                )}       
            </div>

        );

    }

