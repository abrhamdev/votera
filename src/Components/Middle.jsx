import ChatRoom from './ChatRoom';
import GameRoom from './GameRoom';
const Middle=({view})=>{
    return(
      <div className=" bg-gray-900 text-white w-3/5 h-[100vh] flex flex-row justify-center">
            {view =='game'?(<GameRoom/>) : (<ChatRoom/>) }
      </div>
    );
}
export default Middle;