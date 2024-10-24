const { Sequelize } = require('sequelize')

const db = new Sequelize('postgresql://postgres.vgkpqlovwbltsrtyhxtl:Msct.142205!@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
    dialect: 'postgres',
    host: 'localhost'

})

try {
    db.authenticate()
    console.log('consectou ao supabase')
} catch (error) {
    console.error(error)
}

module.exports = db