const http = require('http')
const server = http.createServer((req, res) => {
    res.write("hello ")
    res.end()
})
server.listen(3000, () => {
    console.log("the server is run the 3000 PORT")
})