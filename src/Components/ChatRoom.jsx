import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatRoom = () => {
  const [Message,setMessage]=useState('');
  useEffect(()=>{
    socket.on('message',msg=>{
      console.log(msg);
    })
  })
 
 const Send=()=>{
    socket.emit("message", Message);
    setMessage('')
 };

  return (
    <>
      <div className="flex flex-col h-full w-full ">
        <h2 className="text-xl font-bold p-2 text-center">Chat Room</h2>
        <div className="flex-1 bg-gray-700 p-4 overflow-y-auto m-4 rounded">
          <div className="flex flex-col space-y-4">
            {/* Example Message */}
            <div className="flex items-start space-x-2"></div>
          </div>
        </div>
        <div className="bg-gray-800 p-2 rounded-lg relative">
          <textarea
            type="text"
            placeholder="Type your message..."
            onChange={(e)=>{setMessage(e.target.value)}}
            className="w-full py-2 pl-4 pr-12 rounded-lg bg-gray-700 text-white focus:outline-none resize-y"
            rows="1"
          />
          <button onClick={Send} className="absolute inset-y-0 right-4 flex items-center px-2">
            <PaperAirplaneIcon className="h-5 w-5 text-gray-500 hover:text-blue-500" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ChatRoom;
