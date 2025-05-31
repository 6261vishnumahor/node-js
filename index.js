// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.write("hello ")
//     res.end()
// })
// server.listen(3000, () => {
//     console.log("the server is run the 3000 PORT")
// })

const http = require('http')
const server = http.createServer((req, res) => {
   if(req.url=="/"){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("hello world")
   }
   else if(req.url=="/about"){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("this is a about page")
   }
   else if(req.url=="/contact"){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end("this is a contact page")
   }

})
server.listen(3000, () => {
        console.log("the server is run the 3000 PORT")
    })


// const url = require('url')
// let s = url.parse('https://127.0.0.1:3000')
// console.log(s.pathname)
// console.log(s.hostname)
// console.log(s.port)
// console.log(s.search)
// var fs =require('fs')
// fs.readFile('my.text','utf8',(err,d)=>{
//    if (err) throw err;
//    console.log(d)
// })
// fs.writeFile('my.text',"this is my new text",(err)=>{
//    if (err)throw err;
// })


// <-------------------------------------------------------use the express--------------------------------------------------------->


// var express=require('express')
// var app =express();
// var port=3000

// var router=require("./routes/first.js")
// app.use(router)
// app.use((req,res)=>{
//    res.status(404).send("page not found")
// })

// app.listen(port,(err)=>{
//    if(err) throw err;
//    console.log(`running 0n ${port} port`)
// })
