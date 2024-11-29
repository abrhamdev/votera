import VideoBox from "./VideBox";
import Cbtn from "./button";

const GameRoom = () => {
  return (
    <div className=" w-full overflow-y-auto" style={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",overflowY:"auto",height:"100vh"}}>
      <div className="bg-gray-800 p-4 rounded-lg flex-shrink-0 text-white text-center mb-2">
        <h2 className="text-xl font-bold">Game Room</h2>
      </div>
       <VideoBox className="flex-shrink-0" />
      <div className="flex-shrink-0 p-4" style={{display:"flex",gap:"3rem",width:"250px",width:"fit"}}>
        <Cbtn name="A" />
        <Cbtn name="B"/>
        <Cbtn name="C"/>
        <Cbtn name="D"/>
      </div>
      
    </div>
  );
};
export default GameRoom;
