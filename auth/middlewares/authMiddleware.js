// Este middleware verifica se o usuário está autenticado
module.exports = (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).send('Você precisa estar logado.');
    }
    next();
  };
  