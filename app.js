const PORT = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const linkRoute = require("./router/linkRoute");
const path = require("path")

/*
    Documentação Mongoose: https://mongoosejs.com/

    Conectando no banco de dados do MongoDB, antigamente
    era usado metodos de callback para o retorno da conexão.

    Atualmente o metodo .connect não aceita callback, ou seja,
    é necessario passar em formato de promisse com o then/catch.
    
    Alternativamente, é possivel fazer uma função async ou monitorar
    o evendo open e error.
*/
mongoose.connect("mongodb://localhost/newlinks");
let db = mongoose.connection;

// Situando via evento
db.on("error", () => { console.log("Erro na abertura do Banco de Dados") });
db.once("open", () => { console.log("Sucesso na abertura do Banco de Dados") });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

app.use("/", linkRoute);

app.listen(PORT, () => {
    console.log(`Exemple app listening on port ${PORT}`);
});