import robotImage from '../assets/robot.png'
import usertImage from '../assets/user.png'
import  dayjs from 'dayjs'



export function ChatMessage({ message, sender , time}){
      
        return (

        <div className = {sender==='user' ? 'flex justify-end items-start' : 'flex items-start'}>

            {sender==='robot' &&  (
                <img src={robotImage} className="w-12"  alt="robot" />
            )}

            <div className="bg-gray-200 px-5 py-4 rounded-md mx-3 mb-5 max-w-80">
                {message}

                {time && (
                    <div className='text-4 text-slate-600 mt-1'>
                        {dayjs(time).format('h:mma')}
                    </div>
            )}


            </div>  

            {sender==='user'  &&   (
                <img src={usertImage} className="w-12" alt="user"  />
             )}
      
        </div>

        );

    }

