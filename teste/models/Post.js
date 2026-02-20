import { DataTypes } from "sequelize";
import db from "./db.js";

const Post = db.define('Postagem', {
        numSerie: {
            type: DataTypes.STRING(60),
            allowNull: false,
            primaryKey: true
        },
        modeloImp: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        ipAddress: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        bucFila: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        setor: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        coluna: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
    }, {freezeTableName: true
})

export default Post;

// Post.sync({force: true})