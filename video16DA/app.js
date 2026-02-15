const express=require('express');
const app=express();
const userModel=require('./models/user')
const postsModel=require('./models/posts')

app.get('/', function(req,res){
    res.send("working");
})

app.get('/create', async function(req,res){
   let user=await userModel.create({
    username:"harsh",
    age:25,
    email:"xyz@microsoft.com"
   });

   res.send(user);
})

app.get("/post/create", async function(req,res){
    let post=await postsModel.create({
        postdata:"post number1",
        user:"69912fc556aaf58cee0820a9"
    })

    let user=await userModel.findOne({_id: "69912fc556aaf58cee0820a9"});

    user.posts_arr.push(post._id);
    await user.save();
    res.send({user,post});
})



app.listen(3000);