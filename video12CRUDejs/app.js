const express=require('express');
const app=express();
const path=require('path');

const usermodel=require('./models/user');
const user = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs");



app.get('/',(req,res)=>{
    res.render("index");
})


app.post('/create',async(req,res)=>{
   let {name, image, email}=req.body;   
   let user=await usermodel.create({
    name,
    email,
    image
   })

   res.redirect('/read');
})

app.get('/read',async(req,res)=>{

    let users=await usermodel.find();

    res.render("read",{users})
})



app.get('/delete/:id',async (req,res)=>{
    let users= await usermodel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})



app.get('/edit/:id',async(req,res)=>{

  let users= await usermodel.findOne({_id: req.params.id});

    res.render("edit",{users})
})

app.post('/update/:usersid',async(req,res)=>{
    let {image,name,email}=req.body;
  let users= await usermodel.findOneAndUpdate({_id: req.params.usersid},{name,image,email},);

    res.redirect('/read');
})


app.listen(3000);