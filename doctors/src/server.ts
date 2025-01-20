import express from "express";
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import cors from "cors";
import http from "http";


dotenv.config();
const app = express();


const PORT = process.env.port;
const DB= process.env.MONGO_URI;

// to use
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );
const server = http.createServer(app);


//connect to database
// mongoose.connect(DB!)
//   .then(async () => {
//     console.log("Connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  // })
  // .catch((err) => console.log(err));











//delete unique index
/*mongoose.connection.collections["patients"]
      .dropIndex("name_1")
      .then(() => {
          console.log('Dropped index');
      })
      .catch((err) => {
          console.log('Failed to drop index:', err);
      });*/

//check indexes
/*const indexes = await nurseModel.collection.getIndexes();
        console.log(indexes);*/
