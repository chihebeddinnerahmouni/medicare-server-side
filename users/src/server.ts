import express from "express";
import dotenv from "dotenv";
// import db from "../db/index";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", require("../routes/routes"));


app.listen(port, () => {
  console.log(`User server is running on port ${port}`);
});
