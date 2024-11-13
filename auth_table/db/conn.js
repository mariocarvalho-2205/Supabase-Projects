const { Sequelize } = require('sequelize')

const conn = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    host: 'localhost'
})

try {
    conn.authenticate()
    console.info('Conectou ao Supabase')
} catch (error) {
    console.error(error)
}

module.exports = conn
