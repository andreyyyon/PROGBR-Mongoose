const mongoose = require("mongoose");

// Preparando o Schema para ser inserido em forma de objeto no banco de dados
const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: {type: String, required: true},
    click: {type: Number, default: 0}
})

/*
    Criando o model (representação da collection)
    - Variavel com a letra maiuscula pois faz referencia a collection
    - Variavel com o mesmo nome mas em minusculo pois faz referencia ao documento/objeto

    let link = new Link({
        title: "instagram",
        description: "Link para o Instagram",
        url: "https://www.instagram.com/an.rebelatto"
    });
*/
module.exports = mongoose.model("Link", linkSchema);