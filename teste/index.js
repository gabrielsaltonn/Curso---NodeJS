// Chamando o express
import express from 'express'
//Importando caminho pelo ES Modules (Node moderno)
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



// Criando algumas rotas
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'html', 'index.html'))
})

app.get('/Sobre', function(req, res){
    res.sendFile(path.join(__dirname, 'html', 'sobre.html'))
})

app.get('/blog', function(req, res){
    res.send('Blog')
})


//Caminho com um parâmetro '/:nome' por exepmlo.
app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>"+"<h3>Sua cor preferida é: "+req.params.cor+"</h3>")
    // res.send("<h2>Seu cargo é: "+req.params.cargo+"</h2>")
    // res.send("<h3>Sua cor preferida é: "+req.params.cor+"</h3>") 
    // //O send só pode ser chamado uma vez. 
})

//Criando um servidor local
//Deve ser sempre a última linha do código.
app.listen(3000, function(){
    console.log("Server rodando...")
})