import express from "express"
const router=express.Router();
import{home,about} from"../controller/routecontroller.js"
router.get("/",home)

router.get("/about",about)

export default router;