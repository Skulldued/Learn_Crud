const express = require('express');
const app = express();

const userModel = require('./usermodel');
// console.log(userModel);

app.get("/",(req,res)=>{
    res.send("hello tannu");
});

app.get("/create",async(req,res)=>{
    let userValue =await userModel.create({
        name:"sunny",
        age:25,
        address:"patna",
        job:"Fullstack Developer"
    })
    res.send(userValue);
})

app.get("/update",async(req,res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username:"sunny"},{name:"tannu"},{new:"true"})
    res.send(updatedUser);
})

app.get("/read",async(req,res)=>{
    let User = await userModel.find();
    res.send(User);
})




app.listen(3000);