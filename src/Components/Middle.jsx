import ChatRoom from "./ChatRoom";
import GameRoom from "./GameRoom";
const Middle = ({ view }) => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto" >
      <div className=" bg-gray-900 text-white w-3/5 overflow-y-auto h-[100vh] ml-[20%] flex flex-row justify-center">
        {view == "game" ? <GameRoom /> : <ChatRoom />}
      </div>
    </div>
  );
};
export default Middle;
