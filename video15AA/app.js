const express = require('express');
const app = express();
const userModel = require('./models/user');
const jwt=require('jsonwebtoken')

const cookieParser = require('cookie-parser');
const path = require('path');

const bcrypt = require('bcrypt');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username,
                email,
                password:hash,
                age
            })

            const token=jwt.sign({email}, "secret");
            res.cookie("token", token);
            res.send(createdUser);
        })
    })
});

app.get("/login", function(req,res){
    res.render('login');
})


app.post("/login", async function(req,res){
   let user=await userModel.findOne({email: req.body.email});
   if(!user){
    return res.send("something went wrong");
   }

   bcrypt.compare(req.body.password, user.password, function(err, result){
    if(result){
         const token=jwt.sign({email: user.email}, "secret");
        res.cookie("token", token);
        res.send("you can login");
    }else{
        res.send("chal bhag jaaa");
    }
   })
})

app.get('/logout', (req,res)=>{
    res.cookie("token", "");
    res.redirect("/");
})

app.listen(3000);