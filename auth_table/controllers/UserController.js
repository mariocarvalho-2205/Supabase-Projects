const conn = require("../db/conn");
const User = require("../models/User");
const supabase = require("../db/supabase");

// Função para criar um usuário no Supabase Auth
async function createSupabaseUser(displayName, email, password, phone, role) {
  try {
    console.log(phone);
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName,
          phone,
          role, // Definir o papel do usuário (aluno, professor ou admin)
        },
      },
    });

    if (error) {
      console.error("Erro ao criar usuário:", error.message);
      return null;
    }

    return user;
  } catch (err) {
    console.error("Erro ao criar usuário:", err);
    return null;
  }
}

const createUser = async (req, res) => {
  const { displayName, email, password, phone, role } = req.body;
  const user = {
    displayName,
    email,
    password,
    phone,
    role,
  };

  try {
    // Criar o usuário no Supabase Auth
    await createSupabaseUser(displayName, email, password, phone, role);
    const { data, error } = await User.create(user);

    if (error) {
      res.json({ error: `Error ao adicionar usuario` });
    }
    res.json({ message: `Usuario ${displayName} criado com sucesso` });
    return data;
  } catch (error) {
    res.json({ error: `Não foi possivel criar o usuario ${error}` });
  }
};

module.exports = {
  createUser,
};
