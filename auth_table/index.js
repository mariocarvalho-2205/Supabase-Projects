require('dotenv').config();

/*
conta mscarvalhotrader@gmail.com 
password - Msct.142205! 
api - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZWxwcG1vanF4d3pmaW9sanltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MzQ2NjYsImV4cCI6MjA0NzExMDY2Nn0.Yms8bZTdRJneCYFkhfeusLOzXqB-d1I1Tl5TJuecMNY
url - https://xvelppmojqxwzfioljym.supabase.co

*/

/**
 * // Criar conexao com supabase do auth atraves da criação do user
 */

const express = require('express')
const app = express()
const port = process.env.PORT
const conn = require('./db/conn')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const router = require('./routes/Routes')

app.use(router)

app.listen(port, () => {
    console.info(`Auth connect in port ${port}`)
})