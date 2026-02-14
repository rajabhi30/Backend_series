const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser());

app.get("/", function (req, res) {
    // res.send("done");
    // res.cookie("name", "abc1101");
    // bcrypt.genSalt(10, function (err, salt) {
    //     bcrypt.hash("abc1011", salt, function (err, hash) {
    //         console.log(hash);
    //     });
    // });

    // bcrypt.compare("abc1101", "$2b$10$.5okM14CEmsT3qICcAx8SO/DNuvsNdmk3CsgAO1TcwTdyUtCNQ5XW", function (err, result) {
    //     // result == true

    //     console.log(result);
        
    // });

    let token=jwt.sign({email:"abc@example.com"}, "secret");
    res.cookie("token",token);
    res.send("done");
})
app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("this is read page");

    let data=jwt.verify(req.cookies.token, "secret");
    console.log(data);
})


app.listen(3000);