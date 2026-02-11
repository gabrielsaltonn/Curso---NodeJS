import express from 'express'
import { engine } from 'express-handlebars'
import { Sequelize } from 'sequelize'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.engine('handlebars', engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

const sequeliza = new Sequelize("teste", "root", "11234", {
    host: "localhost",
    dialect: "mysql"
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})