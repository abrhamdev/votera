import VideoBox from "./VideBox";

const GameRoom = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-800 p-4 text-white">
        <h2 className="text-xl font-bold">Game Room</h2>
      </div>
       <VideoBox/>
    </div>
  );
};
export default GameRoom;
