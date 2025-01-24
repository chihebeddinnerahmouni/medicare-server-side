import express from "express";
import dotenv from "dotenv";
// import db from "../db/index";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/dentists", require("../routes/routes"));


app.listen(port, () => {
  console.log(`Dentists server is running on port ${port}`);
});
