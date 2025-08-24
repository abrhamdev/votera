export default (io, socket) => {
  socket.on("sendMessage", ({ to, message }) => {
    io.to(to).emit("receiveMessage", {
      from: socket.id,
      message,
    });
  });
};
