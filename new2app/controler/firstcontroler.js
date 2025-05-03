function home(req,res){
    res.send("hello")
}

function about(req,res){
    res.send("<h1>about hello</h1>")
}
function contact(req,res){
    res.send(" <h1>contact  hello</h1>")
}
module.exports={home,about,contact}