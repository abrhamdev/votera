import React from "react";
import {
  ChatBubbleLeftEllipsisIcon,
  PlayIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SideBar = ({userName,userPoints,view,setView,handleLogout}) => {
 

  return (
    <div className="w-1/5 bg-gray-800 flex flex-col fixed items-center h-[100vh] py-8">
      <img
        src="https://via.placeholder.com/80"
        alt="User Avatar"
        className="w-20 h-20 rounded-full mb-4"
      />
      <h2 className="text-lg font-bold mb-2">{userName}</h2>
      <p className="text-sm mb-4">Points: {userPoints}</p>

      <div className="space-y-8 mt-8">
        <div
          className={`flex items-center space-x-3 cursor-pointer ${
            view === "chat" ? "text-blue-400" : "text-white"
          }`}
          onClick={() => setView("chat")}
        >
          <ChatBubbleLeftEllipsisIcon className="h-8 w-8" />
          <p>Chat</p>
        </div>
        <div
          className={`flex items-center space-x-3 cursor-pointer ${
            view === "game" ? "text-green-400" : "text-white"
          }`}
          onClick={() => setView("game")}
        >
          <PlayIcon className="h-8 w-8" />
          <p>Play Game</p>
        </div>
        <div
          className="flex items-center space-x-3 cursor-pointer text-red-400"
          onClick={handleLogout}
        >
          <ArrowRightOnRectangleIcon className="h-8 w-8" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
