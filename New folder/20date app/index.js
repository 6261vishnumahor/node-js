import express from "express";
const app =express();
import port from "./config/envConfig.js";
import router from "./routes/routes.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import mongoose from "mongoose";

// const app =express();
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/firstdata')
.then(()=>console.log("connect"))
.catch((err)=>console.log("not"))

// mongoose.connect('mongoose.connect(process.env.MONGO_URI)')
// .then(()=>console.log("mongodb connected"))
// .catch((err)=>console.log("not connected"))

app.use(router)

app.listen(port,(req,res)=>{
    console.log(`running on ${port}`)
})