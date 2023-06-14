const express = require("express");
const { getMongoCollection } = require("./database/db");
const { ObjectId, MongoUnexpectedServerResponseError } = require("mongodb");

const port = process.env.PORT ?? 5030;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "db";

const app = express();

// Configuração para permitir o uso de JSON nas requisições
app.use(express.json());

// Endpoint para obter todas as perguntas
app.get("/api/questions", async (req, res) => {
  try {
    // Lógica para obter todas as perguntas da base de dados
    const questionsCollection = await getMongoCollection("questions");
    const questions = await questionsCollection.find().toArray();
    console.log(questions)

    return res.status(200).json( questions );
  } catch (error) {
    console.error("Erro ao obter perguntas:", error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para criar usuário
app.post("/api/users", async (req, res) => {
  try {
    // Lógica para criar usuário
    const { username } = req.body;
    const usersCollection = await getMongoCollection("users");
    const result = await usersCollection.insertOne({ username });

    res.json({ user: result.ops[0] });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para validar perguntas corretas
app.post("/api/validate-question", async (req, res) => {
  try {
    // Lógica para validar perguntas corretas
    const { questionId, userAnswer } = req.body;

    // Aqui você precisará acessar a pergunta no banco de dados com base no questionId
    const questionsCollection = await getMongoCollection("questions");
    const question = await questionsCollection.findOne({ _id: new ObjectId(questionId) });

    if (!question) {
      return res.status(404).json({ error: "Pergunta não encontrada" });
    }


    // Comparar a resposta fornecida pelo usuário com a resposta correta da pergunta
    const isCorrect = question.correct === userAnswer;


    res.json({ isCorrect });
  } catch (error) {
    console.error("Erro ao validar pergunta:", error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para buscar perfil
app.get("/api/profile", async (req, res) => {
  try {
    const username = req.body;
console.log(username)
    // Aqui você precisará acessar a coleção de usuários no banco de dados
    const usersCollection = await getMongoCollection("users");

    // Buscar o usuário com base no nome de usuário
    const user = await usersCollection.findOne(username);
    console.log(user)
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.json({ profile: user });
  } catch (error) {
    console.error("Erro ao buscar perfil do usuário:", error);
    res.status(500).json({ error: error.message });
  }
});


app.put("/api/users", async (req, res) => {
  try {
    const { username, newUsername } = req.body;

    // Aqui você precisará acessar a coleção de usuários no banco de dados
    const usersCollection = await getMongoCollection("users");

    // Verificar se o usuário existe com o nome de usuário fornecido
    const existingUser = await usersCollection.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    // Atualizar o nome de usuário
    await usersCollection.updateOne(
      { username },
      { $set: { username: newUsername } }
    );

    res.json({ user: { username: newUsername } });
  } catch (error) {
    console.error("Erro ao editar usuário:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`À escuta em http://localhost:${port}`);
});