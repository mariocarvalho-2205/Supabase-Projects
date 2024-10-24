const { DataTypes } = require('sequelize')
const db = require('../db/db')

const User = require('../models/User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    }
},
{
    tableName: "toughts", // Nome da tabela no banco de dados
  })

// User.hasMany(Tought)
// Tought.belongsTo(User)

module.exports = Tought