import express from "express"
const router=express.Router()

router.use("/",(req,res)=>{
    res.send("this is home page")
})
export default router;