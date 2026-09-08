import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// por enquanto apenas o parâmetro "res" está sendo usado
function manipuladorDeErros(erro, req, res, next) {
  console.log(erro); // imprime o erro para a pessoa desenvolvedora

  if (erro instanceof mongoose.Error.CastError) {
    // condicional para indicar se o ID de busca foi digitado incorretamente. O CastError é um erro interno do mongoose. Serve para indicar se o erro é uma instância de CastError
    // o erro 400 significa bad request, que significa uma requisição ruim
    new RequisicaoIncorreta().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    // Esta condição indica se houve erro de validação. Um campo obrigatório que não foi informado pelo usuário, por exemplo
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof ErroBase) {
    erro.enviarResposta(res);
  } else {
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;