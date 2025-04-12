import { Server, Socket } from "socket.io";

interface CustomSocket extends Socket {
  userId?: string;
}

export const setupSocket = (io: Server) => {
  io.on("connection", (socket: CustomSocket) => {

    socket.on("authenticate", ({ userId }) => {
      socket.userId = userId;
        socket.join(`user_${userId}`); 
      console.log(`User authenticated: ${userId}`);
    });

  });
};
