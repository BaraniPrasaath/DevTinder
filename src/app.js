const express = require("express");

const app = express();

app.post("/user",(req, res)=>{
    //Created the User
    res.send("User Created Seccessfully");
})

app.get("/user",(req, res)=>{
    //Getting the data
    res.send({firstName: "Barani Prasaath", lastName: "D"});
})

app.put("/user",(req, res)=>{
    //Update the User
    res.send("User is Updated");
})

app.delete("/user",(req, res)=>{
    //Delete the data
    res.send("The user is deleted");
})


// app.use("/test", (req, res)=>{
//     res.send("Testing end point test");
// })

// app.use("/user", (req, res)=>{
//     res.send("Testing end point user");
// })

app.use("/",(req, res)=>{
    res.send("Hello Devs");
})

app.listen(3000,()=>{
    console.log("The Server is Listerning to the port 3000...")
});
