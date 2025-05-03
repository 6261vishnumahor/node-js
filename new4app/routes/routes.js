import express from 'express'
const router=express.Router();

import{home,about,contact}from '../controllers/routerControllers.js';

router.get('/',home)
router.get('/about',about)
router.get('/contact',contact)
export default router