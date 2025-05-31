import express from "express";
import port from "./config/envConfig.js";
import router from "./routes/routes.js";
// import bodyParser from "body-parser";

const app=express();

app.set('view engine','ejs')
app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(router)

app.listen(port,()=>{
    console.log(`running on ${port} port`)
})