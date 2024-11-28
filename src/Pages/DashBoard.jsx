import React, { useEffect, useState } from "react";
import RightSide from "../Components/RightSide";
import SideBar from "../Components/SideBar";
import Middle from "../Components/Middle";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


const DashBoard = () => {
  const navigate = useNavigate();
  useEffect(() => {
   
   // Retrieve the corresponding token
   const token =sessionStorage.getItem(`auth_token_`);
    if (token) {
      navigate("/login");
    }
  });
  
  const [view, setView] = useState("chat");
  const [gameMode, setGameMode] = useState("");
  const userName = "abrham";
  const userPoints = 23;

  const handleLogout = () => {
    localStorage.removeItem("token");
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
        <Middle view={view} />
        <RightSide view={view} gameMode={gameMode} />
      </div>
    </>
  );
};
export default DashBoard;
