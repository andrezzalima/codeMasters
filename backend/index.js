const express = require("express");
const { getMongoCollection } = require("./database/db");
const { ObjectId } = require("mongodb");

const port = process.env.PORT ?? 5030;


const app = express();

// Configuração para permitir o uso de JSON nas requisições
app.use(express.json());

// Endpoint para obter todas as perguntas
app.get('/api/questions', (req, res) => {
  // Lógica para obter todas as perguntas
  const questions = [
    { id: 1, title: 'Pergunta 1', description: 'Descrição da pergunta 1' },
    { id: 2, title: 'Pergunta 2', description: 'Descrição da pergunta 2' },
    // ...adicionar mais perguntas
  ];

  res.json({ questions });
});

// Endpoint para criar usuário
app.post('/api/users', (req, res) => {
  // Lógica para criar usuário
  const { username } = req.body;
  // ...adicionar lógica para criar usuário no backend

  res.json({ user: { username } });
});

// Endpoint para validar perguntas corretas
app.post('/api/validate-question', (req, res) => {
  // Lógica para validar perguntas corretas
  const { questionId } = req.body;
  // ...adicionar lógica para validar pergunta no backend

  const isCorrect = true; // Exemplo: sempre retorna true

  res.json({ isCorrect });
});

// Endpoint para buscar perfil
app.get('/api/profile', (req, res) => {
  // Lógica para buscar perfil do usuário
  const profile = {
    username: 'exemplo',
    email: 'exemplo@example.com',
    // ...adicionar mais informações do perfil
  };

  res.json({ profile });
});

// Endpoint para editar usuário
app.put('/api/users', (req, res) => {
  // Lógica para editar usuário
  const { username } = req.body;
  // ...adicionar lógica para editar usuário no backend

  res.json({ user: { username } });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});

app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`);
});
