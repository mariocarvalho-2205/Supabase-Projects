require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000
const File = require('./models/File');
const supabase = require('./db/supabaseClient');
const upload = require('./db/upload');


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const db = require('./db/db')

// Rota para upload de arquivos
app.post('/upload', upload.single('file'), async (req, res) => {
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
  
      res.status(200).json({
        message: 'Upload bem-sucedido!',
        fileUrl: publicUrl,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


db.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`conectou a porta ${port}`)
    })
})
.catch(err => {
    console.log(err)
})
