import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createRouter from "./Router/CreateRouter.js";
import EmpRouters from "./Router/EmpRouter.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/seed/", createRouter);
app.use("/api/shaqo/", EmpRouters);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
