import bcrypt from "bcrypt";
import { checkUser, insertUser } from "../models/user.js";
import { generateToken } from "../services/generateToken.js";
import hash from "../services/hashService.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
   
      const user = await checkUser(email);
      if (!user) {
        return res.status(400).json({ message: "User not found!" });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid Credential" });
        }
    const token = generateToken(user._id);
      res.json({ message: "Login successfull", token, userID: user._id });

  } catch (err) {
    console.log(err);
  }
}

export const getProfile = async (req, res) => {
  const userId = req.userId;

  try {
   
      const user = await checkUser(userId);
    console.log(user);
      res.json({userID: user._id });

  } catch (err) {
    console.log(err);
  }
}

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await checkUser(email);
    if (user) {
      return res.status(400).json({ message: "User already exist!" });
    }
    const hashdpass = await hash(password);
    await insertUser(name, email, hashdpass);
    res.status(201).json({ message: "User registered successfully" });
        
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
}