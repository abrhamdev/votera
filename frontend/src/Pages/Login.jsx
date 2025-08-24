import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../apiUrl";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // To navigate after successful login
 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    setError(""); // Reset error message before making API request
   
    // Make an API request to authenticate the user
    
    try {
      const response = await axios.post(`${API_URL}/user/login`, {email,password});

      sessionStorage.setItem("authtoken", response.data.token);   
      navigate("/"); 
      setError("");
    } catch (err) {
      // Handle network errors
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center text-white">
      <form className="text-center" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        {/* Email Field */}
        <input
          type="email"
          placeholder="Email"
          className="block w-72 p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => {setEmail(e.target.value); setError("")}}
          
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="block w-72 p-3 mb-6 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => {setError("");setPassword(e.target.value)}}
          />

        {/* Login Button */}
        <button
          type="submit"
          className="w-72 py-3 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
