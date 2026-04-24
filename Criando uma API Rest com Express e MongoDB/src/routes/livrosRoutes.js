import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// o express tem uma característica de que as rotas seguem uma ordem de complexidade, onde se deve considerar as rotas de maior complexidade primeiro
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;