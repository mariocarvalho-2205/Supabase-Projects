const express = require('express')
const app = express()

const port = 3000

const db = require('./db/db')
const session = require('express-session');
const exphbs = require('express-handlebars');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();


// Handlebars setup
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Configuração das rotas
app.use('/auth', authRoutes);

// Rota de teste para exibir formulários de registro e login
app.get('/register', (req, res) => res.render('register', { title: 'Registro' }));
app.get('/login', (req, res) => res.render('login', { title: 'Login' }));
db
.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Conectou a porta ${port}`)
    })
})
.catch(err => {
    console.log(err)
})