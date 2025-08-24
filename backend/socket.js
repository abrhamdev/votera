import { Server } from "socket.io";
import chatEvents from "./sockets/chat.js";
import videoEvents from "./sockets/video.js";

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    
    chatEvents(io, socket);
    videoEvents(io, socket);

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
