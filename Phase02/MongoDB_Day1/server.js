const express = require("express");
const app = express();
const {studentRouter} = require("./Routes/studentroutes");
const connection = require("./config/db");

app.use(express.json());

app.use("/", studentRouter);

app.listen(5000, async () => {
    try {
        await connection;
        console.log("connected to db");
    } catch (error) {
        console.log("error while connecting to db");
    }
    console.log("Server is running on http://localhost:5000");
}) 