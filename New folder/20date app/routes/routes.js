import express from "express"
const router=express.Router();

import {home,about,adddata,subdata,regdata,showreg,getregdata,deletedata,updateform,update} from "../controllers/routeControllerss.js";
router.get('/',home)
router.get('/about',about)
router.get('/adddata',adddata)
router.get('/showreg',showreg)
router.get('/getregdata',getregdata)
router.post('/subdata',subdata)
router.post('/regdata',regdata)
router.post('/showdata/delete/:id',deletedata)
router.get('/showdata/updateform/:id',updateform)
router.post('/showdata/update/:id',update)

export default router