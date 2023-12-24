import express from "express";
import shaqo from "../models/EmpModel.js";
import data from "../data.js";

const createRouter = express.Router();

createRouter.get("/", async (req, res) => {
  // await shaqo.remove({});

  const xogta = await shaqo.insertMany(data.empl);
  //xogta data base lageeyo
  res.send({ xogta });
});

export default createRouter;
