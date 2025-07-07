import express from "express"
import router from "./route/router.js";
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser";

const app =express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/newdddd")

app.use(router)
app.listen(3000,()=>{
    console.log("the running port 3000")
})