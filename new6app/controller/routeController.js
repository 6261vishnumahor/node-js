function home(req,res){
  const a={
    "name":"sani",
    "class":"12th"
  }
    res.render("home",{a})
}
function about(req,res){
    const b={
        "name":"vishnu",
        "class":"10th"
    }
    res.render("about",{b})
}
module.exports={home,about}
