import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";
import { setupSocket } from "./socket"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

setupSocket(io);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", require("../routes/routes"));
app.use("/visites", require("../routes/homeRoutes"));
app.use(express.static(path.join(__dirname, "../public")));


httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { io };

