import DashBoard from "./Pages/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
