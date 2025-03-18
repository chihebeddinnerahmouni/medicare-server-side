import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", require("../routes/routes"));
app.use("/visites", require("../routes/homeRoutes"));
app.use(express.static(path.join(__dirname, "../public")));


app.listen(port, () => {
  console.log(`User server is running on port ${port}`);
});
