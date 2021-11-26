const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());
const usuario = require("./rotas/usuario");
const nota = require("./rotas/notas");

app.use("/usuario", usuario);
app.use("/nota", nota);

app.listen(porta, () => {
  console.log(`Aplicação rodando na porta ${porta}`);
});