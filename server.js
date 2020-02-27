const express = require("express")
const nunjucks = require("nunjucks")
const server = express()

//Arquivos estáticos
server.use(express.static('public'))

const baseDir = `${__dirname}/public/`

//Renderizar html
nunjucks.configure(`${baseDir}`,{
    express: server
})

server.get('/',(req,res)=>{
    return res.render("index.html")
})

const port = process.env.PORT || 3000

server.listen(port,() => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))
