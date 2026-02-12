const express=require('express');

const app=express();

const userModel=require('./usermodel');



app.get('/',(req,res)=>{
    res.send("this is mongoDB");
})


// this create
app.get('/create', async (req,res)=>{
    let createduser=await userModel.create({
        name:"abhiraj001",
        username:"rajabhi_001",
        email:"rajabhishek8070@gmail.com"
    })

    res.send(createduser);
})



// this read
app.get("/read", async (req,res)=>{
    let users=await userModel.find();
    res.send(users);
})


// this update
app.get("/update", async(req,res)=>{
    let updatedUser=await userModel.findOneAndUpdate({name:"abhiraj001"}, {email:"xyz@google.com"});

    res.send(updatedUser);
})

// this delete
app.get("/delete", async(req,res)=>{
    let users=await userModel.findOneAndDelete({name:"abhiraj001"});

    res.send(users);
})

app.listen(3000);