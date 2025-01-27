import express from "express";
import dotenv from "dotenv";
// import db from "../db/index";
import path from "path";
// import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/nurses", require("../routes/routes"));
app.use(express.static(path.join(__dirname, "../public")));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
