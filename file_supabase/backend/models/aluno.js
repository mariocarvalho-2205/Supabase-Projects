const { DataTypes } = require('sequelize');
const db = require('../db/db');

const Aluno = db.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Aluno;
