const express = require("express");
const app = express();

app.use(express.json());
const validateData = (req, res, next) => {
    const {email, password} = req.body;
    console.log(email, password);
    if(!email.includes("@") || !email.endsWith(".com")) {
        res.status(400).send("email is not valid");
    }
    else{
        console.log("middleware is called");
        next();
    }
    
    
}

const authData = (req, res, next) => {
    console.log("auth middleware is called");
    next();
}

app.use(authData);
app.use(validateData);


app.get("/", (req, res) => {
    res.send("this is home page");
})

app.get("/users", (req, res) => {
    res.send("this is users page");
})


app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})