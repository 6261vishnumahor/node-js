import User from"../models/user.js"
const user=async(req,res)=>{
    const{name,email}=req.body
    await User.create({name,email})
    res.end()
}

export {user}