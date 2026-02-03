const express=require('express');

const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

//middlewere

app.use(function(req,res,next){
    console.log("I am in middlewere1")
    next();
});



app.use(function(req,res,next){
    console.log("I am in middlewere2")
    next();
});
  


app.get("/", function(req,res){
    res.send("this is a homeeee page");
})

app.get("/profile",function(req,res,next){
    // res.send("this is a profile page")
    return next(new Error("not implemented!!"));

})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send("something went wrong");
})

app.listen(3000);