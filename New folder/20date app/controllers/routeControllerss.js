import User from "../models/user.js"
import Reg from "../models/reg.js"
const home=(req,res)=>{
    res.render("home")
}

const about=(req,res)=>{
    res.render("about")
}


const adddata=(req,res)=>{
    res.render("adddata")
}
const subdata=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    await User.create({name,email})
    res.redirect("/")
}

const showreg=(req,res)=>{
    res.render("registration")
}

const regdata=async(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let mobile=req.body.mobile
    let password=req.body.password
    let cpass=req.body.cpass
    await Reg.create({name, email,mobile,password,cpass})
    res.redirect("/")
}
const getregdata=async(req,res)=>{
    let d=await Reg.find()
    res.render("showdata",{d})
}

const deletedata=async(req,res)=>{
     await Reg.findByIdAndDelete(req.params.id)
    res.redirect("/getregdata")
}

const updateform=async(req,res)=>{
    let value = await Reg.findById(req.params.id)
    res.render("updateform",{value})
}

const update=async(req,res)=>{
     await Reg.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/getregdata")
}

export{home,about,adddata,subdata,regdata,showreg,getregdata,deletedata,updateform,update}