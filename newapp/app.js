var express=require('express')
 var app=express();
  PORT=4000;

  var router=require("./routers/first-r.js")
 app.use(router);

 app.use((req,res)=>{
    res.status(404).send("<h1>THE PAGE NOT FOUND<h1>")
 })
 app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`RUNNING ON ${PORT}PORT`)
 })