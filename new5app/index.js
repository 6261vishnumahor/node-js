import express from "express";
const app=express()
import router from "./route/router.js"
import port from "./config/db.js"

app.set("view engine","ejs")
app.use(express.static("public"))

app.use(router)
// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/personaldata")
// .then(()=>console.log("hello"))
// .catch((err)=>console.log("not connect"))
app.listen(port,(req,res)=>{
    console.log(`${port} `)
})