import express from 'express'
const router=express.Router();

import{home,about,contact,adddata,subdata}from '../controllers/routerControllers.js';

router.get('/',home)
router.get('/about',about)
router.get('/contact',contact)
router.get('/adddata',adddata)
router.post('/subdata',subdata)

export default router