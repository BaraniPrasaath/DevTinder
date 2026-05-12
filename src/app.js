const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    res.send("Testing end point test");
})

app.use("/user", (req, res)=>{
    res.send("Testing end point user");
})

app.use("/",(req, res)=>{
    res.send("Hello Devs");
})

app.listen(3000,()=>{
    console.log("The Server is Listerning to the port 3000...")
});
