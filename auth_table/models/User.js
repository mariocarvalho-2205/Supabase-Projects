const { DataTypes } = require('sequelize')
const conn = require('../db/conn')


const User = conn.define('user', {
    displayName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = User