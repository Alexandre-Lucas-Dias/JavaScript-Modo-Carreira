import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

// o express fará a responsabilidade de ouvir as rotas sendo chamadas, trabalhando com as requisições e oferecendo as respostas

// esta função vai se comportar como um middleware, onde ela vai centralizar as rotas
// middlewares são utilizados pra ter acesso às requisições e respostas no momento em que estão sendo feitas, e fazer algumas ações nelas. Toda vez que chegam dados via body em uma requisição, eles chegam como string. Por isso é necessário converter a string para JSON, através do middleware
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livros, autores); // livros aqui são as rotas que estão sendo exportadas de livrosRoutes
};

export default routes;