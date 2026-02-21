import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import sequelize from './models/db.js'
import Post from './models/Post.js'

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

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Criando módulos / rotas

app.get('/', function(req, res){
    res.render('home')
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', async function(req, res){
    try {
        await Post.create({
            numSerie: req.body.numSerie,
            modeloImp: req.body.modeloImp,
            ipAddress: req.body.ipAddress || null,
            bucFila: req.body.bucFila || null,
            setor: req.body.setor || null,
            coluna: req.body.coluna || null
        })
        res.redirect('/')
    } catch (erro) {
        res.send("Falha ao criar post: " + erro)
    }
})

// Rota com o servidor local
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000")
    })
})
