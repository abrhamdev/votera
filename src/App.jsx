import DashBoard from "./Pages/DashBoard";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

function App() {

 return(
  <>
   <Router>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Sign-up" element={<Signup/>}/>
       <Route path="/" element={<DashBoard/>}/>
     </Routes>
   </Router>
  </>
 );
}

export default App
