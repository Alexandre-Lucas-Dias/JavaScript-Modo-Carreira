import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

// esta classe herda da classe RequisicaoIncorreta, pois ambas têm o mesmo status, que no caso é 400
class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro) {
        // a constante abaixo será um array composto apenas pela propriedade 'message' do erro
        const mensagensErro = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ErroValidacao;