import express from "express";
import port from "./config/envConfig.js";
import router from "./routes/routes.js";

const app=express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(router)

app.listen(port,(req,res)=>{
    console.log(`running on ${port}port`)
})