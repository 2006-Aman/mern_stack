const { createStudent, getStudent , getsingleStudent} = require("../controllers/studentcontroller");

const express = require("express");
const studentRouter = express.Router();

studentRouter.post("/create", createStudent);
studentRouter.get("/get", getStudent);
studentRouter.get("/get/:id", getsingleStudent);
module.exports = { studentRouter };