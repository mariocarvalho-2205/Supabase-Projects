import { useState } from 'react';
import api from "../../services/api"; // Importando o serviço de API



function AddAluno() {
  const [file, setFile] = useState(null);
  const [nome, setNome] = useState('');
  const [ endereco, setEndereco ] = useState('')

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    if (!file || !nome) {
      alert('Por favor, insira o arquivo e o aluno do arquivo.');
      return;
    }

    console.log(nome, endereco)
    try {
      const formData = new FormData();
        formData.append('file', file);
        formData.append('nome', nome);
        formData.append('endereco', endereco)

      const response = await api.post('/alunos/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(`Upload bem-sucedido: ${response.data.fileUrl}`);
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
      alert('Erro ao fazer upload do arquivo.');
    }
    





  };

  return (
    <div>
      <h2>Upload de Arquivo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Aluno:</label>
          <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          placeholder="Endereço"
        />
        </div>
        <div>
          <label htmlFor="file">Selecione um arquivo:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default AddAluno;
