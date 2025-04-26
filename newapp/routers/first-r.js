var express=require('express')

var router=express.Router()
router.get("/",(req,res)=>{
    res.send("run");
 })
 router.get("/about",(req,res)=>{
    res.send(" about run");
 })
 module.exports=router
