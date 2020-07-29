const express=require("express");
const app=express();

app.get("/userDetails",(req,res)=>{
    c={
        name:"Navprayas",
        dob:"2000"
    }
    res.send(c);

});
app.listen(5000,()=>console.log("server running on port 5000"));