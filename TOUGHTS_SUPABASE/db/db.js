/*
projectName = toughts
Project Url = https://vfmwbujiqedwjafmnaps.supabase.co
api key = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmbXdidWppcWVkd2phZm1uYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwODU3MzMsImV4cCI6MjA0MzY2MTczM30.-ZFbkbrKpptoPlJ6-zGidrSWBAffIh7IA1XhOADFvUw
password = Msct.142205!
*/
const { Sequelize } = require('sequelize')

const db = new Sequelize('postgresql://postgres.krqwpyuzvlnazhlxdvgt:Msct.142205!@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
})

try {
    db.authenticate()
    console.info('TOUGHTS conectou ao Supabase')
} catch (error) {
    console.error(error)
}

module.exports = db