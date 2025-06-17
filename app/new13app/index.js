import express from "express"
import router from "./router/router.js"
const  app=express()


app.use(router)

app.listen(3000,()=>{
    console.log("the port is running in 3000")
})