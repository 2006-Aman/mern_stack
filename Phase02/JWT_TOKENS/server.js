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
    let user = {
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
        return res.status(401).send("Email is not valid");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.userpassword
    );

    if (!isMatch) {
        return res.status(401).send("Password is not valid");
    }

    const token = jwt.sign({ email: user.useremail }, "secretkey", { expiresIn: "1h" });  // jwt.sign(payload, secretOrPrivateKey, expirestime) 

    res.send({ message: "login successful", token: token });


});



const authMiddleware = (req, res, next) => {
    const header_data = req.headers.authorization;

    if (!header_data || !header_data.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Authorization token is missing"
        });
    }

    const token = header_data.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SecretKey);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token is invalid or expired"
        });
    }
};




app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "this is profile page",
        useremail: req.user.email
    });
});


app.get("/account", authMiddleware, (req, res) => {
    res.json({
        message: "This is account page",
        useremail: req.user.email
    });
});

app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})