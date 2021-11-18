const express = require("express");
const app = express();
const usuario = require ("./rotas/usuario");
const nota = require  ("./rotas/notas");
const porta = 3000;
app.use(express.json())


app.use("/usuario",usuario)
app.use("/nota",nota)


app.listen(porta,function(){
    console.log("Aplicativo rodando na porta "+porta)
});