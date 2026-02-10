 //importa as ferramentas do sequelize
import { Sequelize, DataTypes } from 'sequelize'

 //cria um sequeliza (um db no NodeJs)
const sequelize = new Sequelize ('teste', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

 //Cria uma autenticação para validar a conezão com o DB
try {
    await sequelize.authenticate()
    console.log('Conectado ao DB!')
} catch (erro) {
    console.error('Erro ao conectar', erro.message)
    process.exit(1)
}

const Impressoras = sequelize.define ('Impressoras', {
    numSerie: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
})

const Usuario = sequelize.define('Usuarios', {
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    dataNasc: {
        type: DataTypes.DATEONLY
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
})

await sequelize.sync()
