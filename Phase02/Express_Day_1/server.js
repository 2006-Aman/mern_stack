const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("this is home page");
})

app.get("/users", (req, res) => {
    res.send("this is users page");
})

app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})

