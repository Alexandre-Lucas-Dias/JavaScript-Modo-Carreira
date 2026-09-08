// extends significa que ErroBase irá herdar as propriedades da classe Error do JS
class ErroBase extends Error {
    constructor(mensagem = "Erro interno do servidor", status = 500) {
        super(); // o super é sempre necessário ter em classes que herdam de outra
        this.message = mensagem;
        this.status = status;
    }

    enviarResposta(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        })
    }
}

export default ErroBase;