// hello jii

const fs=require('fs');

// fs.writeFile("hey.txt","helli jee kaise ho!!",function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("done jee");
//     }
// })

// fs.appendFile("hey.txt","i am adding something in file using append", function(err){
//     if(err){
//         console.err(err.message);
//     }
//     else{
//         console.log("append ho gya");
//     }
// })

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("naam badal gyaa");
//     }
// });


// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//     if(err){
//         console.log("malik ek mistake ho gaya")
//     }
//     else{
//         console.log("copy ho gaya bhai")
//     }
// })

// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("fuck");
//     }
// })

// fs.rmdir("./copy", {recursive:true},function(err){
//     if(err){
//         console.log("delete nahi hua");
//     }
//     else{
//         console.log("delete ho gaya")
//     }
// })



// fs.rm("./copy", {recursive:true},function(err){
//     if(err){
//         console.log("delete nahi hua");
//     }
//     else{
//         console.log("delete ho gaya")
//     }
// })



// http module

const http=require('http');

const server=http.createServer(function(req,res){
    res.end("You just started a server")
})

server.listen(3000);