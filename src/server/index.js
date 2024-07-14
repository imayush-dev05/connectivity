const express=require("express");
const app=express();

let port=5000;

app.get("/api",(req, res)=>{
    res.json({
        "users":["userOne","userTwo"]
    })
})

app.listen(port,()=>{
    console.log(`Listening to ${port}`);
})