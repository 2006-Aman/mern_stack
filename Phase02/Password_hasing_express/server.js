const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SecretKey = "secretkey";


app.use(express.json());

app.get("/", (req, res) => {
    res.send("this is home page");
})

let users = [];  //temporary database
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    let user={
        useremail: email,
        userpassword: await bcrypt.hash(password, 10)
    }
    //bcrypt.hash(password, 10) is used to hash the password with a salt of 10 rounds for security
    users.push(user);
    res.send(`${JSON.stringify(users)} is registered successfully`);

})



app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    let user = users.find((user) => user.useremail === email);

    if (!user) {
        res.send("email is not valid");
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(
        password,
        user.userpassword
    );

    if (!isMatch) {
        res.send("password is not valid");
    }





    res.send("login successful");
});


app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})