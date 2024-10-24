const { DataTypes } = require("sequelize");
const db = require("../db/db");

const User = db.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users", // Nome da tabela no banco de dados
  }
);

module.exports = User;
