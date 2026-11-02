const express = require("express");
const cors = require("cors");
const rotaLivro = require("./rotas/livro");
const rotaFavorito = require("./rotas/favorito");

const app = express();
app.use(cors({origin: "*"})); // isso significa que todas as origens estão permitidas a fazer requisições
app.use(express.json()); // com este comando, eu informo que a aplicação aceita receber body's do tipo json

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavorito);

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});