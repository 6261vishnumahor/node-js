const express = require ("express")
const app=express()

const router=require("./route/router.js")
const port=require("./config/db.js")


app.use(router)
app.set("view engine","ejs")
app.use(express.static("public"))


app.listen(port,()=>{
console.log("running port 3000")
}
)