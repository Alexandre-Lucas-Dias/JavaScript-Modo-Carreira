import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json());
// // testando um novo middleware
// app.get("/livros", (req, res, next) => {
//   console.log("Middleware registrado no GET da rota /livros");
//   // o next serve para executar o próximo middleware registrado para a rota e o método HTTP solicitado
//   next();
// });
routes(app);

// este middleware abaixo só será executado se a requisição não tiver nenhuma correspondência com as rotas acima
app.use(manipulador404);

// middleware para erro (recebe 4 parâmetros)
app.use(manipuladorDeErros);

export default app;