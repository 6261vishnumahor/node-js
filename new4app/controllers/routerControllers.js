let arr=[]
let id=1


function home(req,res){
    res.render("home")
}

function about(req,res){
    res.render("about")
}

function contact(req,res){
    res.render("contact")
}
function adddata(req,res){
    res.render("adddata")
}

function subdata(req,res){
    let name=req.body.name
    let email=req.body.email
    let obj={
        id:id++,
        name,
        email
    }

    arr.push(obj)
    console.log(arr)
    res.redirect("/")
}

export {home,about,contact,adddata,subdata}