const bcrypt = require('bcrypt');
const User = require('../models/User');
const supabase = require('../models/auth');

async function register(req, res) {
  const { email, password } = req.body;

  // Verificar se o usuário já existe
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ error: 'Usuário já existe.' });
  }

  // Criptografar a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar usuário no Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Criar o usuário no banco de dados via Sequelize
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });

  return res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
}

async function login(req, res) {
  const { email, password } = req.body;

  // Verificar se o usuário existe no banco de dados
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(400).json({ error: 'Credenciais inválidas.' });
  }

  // Verificar se a senha é válida
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Credenciais inválidas.' });
  }

  // Logar o usuário no Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Login realizado com sucesso', user: data.user });
}



module.exports = { register, login };
