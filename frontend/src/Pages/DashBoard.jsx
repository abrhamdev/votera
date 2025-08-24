import React, { useEffect, useState } from "react";
import RightSide from "../Components/RightSide";
import SideBar from "../Components/SideBar";
import Middle from "../Components/Middle";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../apiUrl";

const DashBoard = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(null);
  const token = sessionStorage.getItem("authtoken");
  useEffect(() => {
    // Retrieve the corresponding token
    const fetchuser = async () => {
      try{
        const response = await axios.get(`${API_URL}/user/profile`,{
          headers: {
            'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
        });
        setUser(response.data.user);
      }catch(error){
        console.log(error);
      }
    }
    if (!token) {
      navigate("/login");
    }
    fetchuser();
  }, [navigate, token]);

  const [view, setView] = useState("chat");
  const [gameMode, setGameMode] = useState("");
  const userName = user?.username;
  const userPoints = 23;

  const handleLogout = () => {
    sessionStorage.removeItem("authtoken");
    navigate("/login");
  };
  return (
    <>
      <div className="flex">
        <SideBar
          userName={userName}
          userPoints={userPoints}
          view={view}
          setView={setView}
          handleLogout={handleLogout}
        />
        <Middle view={view} gameMode={gameMode}/>
        <RightSide view={view} gameMode={gameMode} />
      </div>
    </>
  );
};
export default DashBoard;
