const express = require("express")
const nunjucks = require("nunjucks")
const server = express()

//Arquivos estáticos
server.use(express.static('public'))

//Renderizar html
nunjucks.configure("./public/",{
    express: server
})

server.get('/',(req,res)=>{
    return res.render("index.html")
})
server.listen(3000)
