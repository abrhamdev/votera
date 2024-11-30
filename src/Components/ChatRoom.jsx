import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import io from "socket.io-client";
 
const socket = io("http://localhost:5000",{
  auth:{
    token:sessionStorage.getItem("authtoken")
  }
});

const ChatRoom = () => {
  const [Message,setMessage]=useState('');
  const [inmsg,setInmsg]=useState([]);
  const [outmsg,setOutmsg]=useState([]);

  useEffect(()=>{
    socket.on('message',msg=>{
      setInmsg((prevMessages) => [...prevMessages, msg]);
    })

    return () => {
      socket.off('message');
    };
  },[])
 
 const Send=()=>{
   
    socket.emit("message", Message);
    setOutmsg(prev=>[...prev,Message])
    setMessage('')
 };

  return (
    <>
      <div className="flex flex-col h-full w-full ">
        <h2 className="text-xl font-bold p-2 text-center">Chat Room</h2>
        <div className="flex-1 bg-gray-700 p-4 overflow-y-auto m-4 rounded">
          
            {/* Example Message */}
            {outmsg.map((message,index)=>(<div key={index} className="flex items-start self-end space-x-2">{message}</div>)) }
            {inmsg.map((message,index)=>(<div key={index} className="flex items-start space-x-2">{message}</div>)) }
            
          
        </div>
        <div className="bg-gray-800 p-2 rounded-lg relative">
          <textarea
            type="text"
            placeholder="Type your message..."
            value={Message}
            onChange={(e)=>{setMessage(e.target.value)}}
            className="w-full py-2 pl-4 pr-12 rounded-lg bg-gray-700 text-white focus:outline-none resize-y"
            rows="1"
          />
          <button onClick={(e)=>{
            Send();
            setMessage('');
            }} className="absolute inset-y-0 right-4 flex items-center px-2">
            <PaperAirplaneIcon className="h-5 w-5 text-gray-500 hover:text-blue-500" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ChatRoom;
