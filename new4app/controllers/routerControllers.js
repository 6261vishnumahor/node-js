const home=(req,res)=>{
    res.render("home")
}

const about=(req,res)=>{
    res.render("about")
}

const contact=(req,res)=>{
    res.render("contact")
}

export{home,about,contact}