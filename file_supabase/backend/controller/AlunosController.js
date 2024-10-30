const Aluno = require("../models/aluno");
const supabase = require('../db/supabaseClient')




module.exports = class AlunosController {
    static async createAluno(req, res) {
        const {
            nome, endereco
        } = req.body
        console.log(nome, endereco)
        try {
            if (!req.file) {
              return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
            }
        
            // Subir o arquivo para o Supabase
            const { originalname, buffer } = req.file;
            const { data, error } = await supabase.storage
              .from('uploads')
              .upload(`uploads/${Date.now()}-${originalname}`, buffer, {
                cacheControl: '3600',
                upsert: false,
                contentType: req.file.mimetype,
              });
        
            if (error) {
              return res.status(500).json({ error: error.message });
            }
        
            // Retornar a URL pública do arquivo
            const publicUrl = supabase.storage
              .from('uploads')
              .getPublicUrl(data.path);
              
              const url = publicUrl.data.publicUrl
      
              const aluno = {
                nome: nome,
                endereco: endereco,
                url: url
              }
              console.log(aluno.nome, url)
      
              await Aluno.create(aluno)
      
              res.status(200).json({
                message: 'Upload bem-sucedido!',
                fileUrl: publicUrl,
              });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}