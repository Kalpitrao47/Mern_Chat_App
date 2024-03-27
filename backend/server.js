import authroutes from "./routes/auth.routes.js";
// const express = require("express"); 
import express from "express";
// const dotenv = require("dotenv"); 
import dotenv from "dotenv"
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    // root route http://localhost:5000
    res.send("Hello World!!!");
});
// app.get("/api/auth/signup", (req, res) => {
//     console.log("SignUp Route")    
// });

// app.get("/api/auth/login", (req, res) => {
//     console.log("Login Route")
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("Logout Route")
// });
//We will use middleware routes so that we wont make this ugly storing all of the routes in the same server.js file.

app.use("/api/auth", authroutes);



app.listen(PORT, () => console.log(`Server running on port${PORT}`));
