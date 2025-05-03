var express=require('express')
// var dotenv=require('dotenv')
var app=express()
// dotenv.config();
// port=process.env.PORT
const port=require("./config/envconfig.js")
var routers=require("./routers/routes.js")
app.use(routers)

app.listen(port,()=>{
    console.log(`running the on ${port}port `)
})