import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String,required: true, trim: true,},
    email: { type: String,required: true,unique: true, lowercase: true, trim: true, },
    password: { type: String,required: true, },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export const checkUser = async (identifier) => {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    return await User.findById(identifier);
  } else {
    
    return await User.findOne({ email: identifier });
  }
};

export const insertUser = async (username, email, password) => {
  const newUser = new User({ username, email, password });
  return await newUser.save();
};