import express from 'express'
import { engine } from 'express-handlebars'
import { Sequelize } from 'sequelize'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

//Cria variável como ferramenta express
const app = express()

//Conversor de URL para PATH para descobrirmos o caminho físico do arquivo atual.
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Procura a configuração view engine
// Descobre que é handlebars
// Procura a pasta definida em views
// Busca o arquivo:views/home.handlebars
// Processa com a engine registrada
// Envia o HTML pronto para o navegador
app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Conectando banco de dados ao arquivo
const sequelize = new Sequelize("teste", "root", "11234", {
    host: "localhost",
    dialect: "mysql"
})

// Criando módulos / rotas
app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    req.body.numSerie
    res.send('Formulário recebido! '+req.body.numSerie)
})

// Rota com o servidor local
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})