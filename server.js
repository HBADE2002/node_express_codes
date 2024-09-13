// console.log("Starting node")
const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    console.log("hello world");
    res.send("Hello World!");
})

app.listen(3000);