import React from "react";

const Cbtn=(props)=>{
  
    return(
      <button className="text-white flex-shrink-0 hover:opacity-60" style={{backgroundColor:"green",borderRadius:"50%",width:'3rem',height:"3rem",display:"flex",alignItems:"center",justifyContent:"center"}}>{props.name}</button>
    );
}

export default Cbtn;