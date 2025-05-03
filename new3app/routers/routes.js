var express = require('express')
var routers = express.Router()
var { home, about, contact } = require("../controler/routeControler.js")
routers.get("/", home)
routers.get("/about", about)
routers.get("/contact", contact)
module.exports = routers