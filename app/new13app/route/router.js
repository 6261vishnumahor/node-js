
import express from "express"
import {user} from "../controller/routeController.js"
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("this is home page")
})
router.post("/user",user)

export default router;