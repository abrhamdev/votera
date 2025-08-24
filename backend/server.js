import http from "http";
import app from "./app.js";
import { initSocket } from "./socket.js";

const server = http.createServer(app);

initSocket(server);

server.listen(5050, () => {
  console.log("Server running on port 5050");
});
