import React from "react";

const RightSide = ({ view, gameMode }) => {
  return (
    <div className="w-1/5 bg-gray-800 p-4 fixed right-0 h-[100vh] text-white">
      {view === "chat" ? (
        <h2 className="text-xl font-bold mb-4">Users Online</h2>
      ) : (
        <h2 className="text-xl font-bold mb-4">
          {gameMode === "create" ? "Players in Session" : "Other Game Sessions"}
        </h2>
      )}
    </div>
  );
};

export default RightSide;
