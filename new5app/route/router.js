import express from "express"
const router=express.Router();
import {home,about}from"../controller/routercontroller.js"
router.get ("/",home)
router.get("/about",about)


// router.get('/',home)
export default router