var express=require('express')
var app=express()
const port=require("./config/envconfig.js")
var routers=require("./routers/routes.js")

// ===============views===============
app.set('view engine','ejs')
app.use(express.static('public'))

// ===================================
app.use(routers)

app.listen(port,()=>{
    console.log(`running the on ${port}port `)
})