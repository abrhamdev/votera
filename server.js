import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server=http.createServer(app); //creating server
const io=new Server(server, {
  cors: {
    origin: "http://localhost:4000", // Allow connections from your frontend's port
    methods: ["GET", "POST"] // Specify allowed methods
  }
}); // attaching socketIo to the server


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abrhamabebe",
  database: "game",
});

db.connect((error) => {
  if (error) {
    console.log("Database connection failed", error.stack);
    return;
  }
  console.log("connected to my sql");
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

   try{
   
    db.query("SELECT * FROM users WHERE email = ?", [email],async (err,result)=>{
        if (err) {
            return res.status(500).json({ message: "Database error" });
          }

          if(result.length==0){
            return res.status(401).json({message: "invalid Email"});
          }
          
        const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
          
         const token = jwt.sign({ userId: user.id }, "this_is_for_user_authentication", { expiresIn: "1h" });
          res.json({message:"Login successfull",token,userID:user.id});

         
    });
   }catch(err){
   }
});

app.post('/getuserid',(req,res)=>{
   const query="SELECT id FROM users WHERE "
})

app.post('/api/signup', async (req,res)=>{
    const {name,email,password}=req.body;

    if(!email || !password || !name ){
        return res.status(400).json({message:"All fields are required"});
    }

    try{
   const hashedpassword = await bcrypt.hash(password,10);
     
    const query= "INSERT INTO users(name,email,password) VALUES (?,?,?)";
    db.query(query,[name,email,hashedpassword],(err,result)=>{
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
              return res.status(400).json({ message: "Email already exists" });
            }
            return res.status(500).json({ message: "Database error", error: err });
          }
          res.status(201).json({ message: "User registered successfully" });
        
    })
  }catch(err){
    res.status(500).json({ message: "Server error", error: err });
  }
})

// Handle WebSocket connection globally
io.on('connection', (socket) => {
  console.log('a user connected with id ', socket.id);
  socket.on('message',(msg)=>{
    console.log(msg);
  });
});

server.listen(5000, () => {
  console.log("the server is running on port 5000");
});
