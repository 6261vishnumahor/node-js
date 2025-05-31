import express from "express";
const app=express();
import router from "./route/router.js";
import port from "./config/envConfig.js"
import e from "express";

app.use(router)
app.set("view engine","ejs")
app.use(express.static("public"))

app.listen(port,(req,res)=>{
    console.log(`the running port ${port}`)
})