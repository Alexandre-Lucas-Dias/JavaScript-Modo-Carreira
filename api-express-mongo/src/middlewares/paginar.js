import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js"

async function paginar(req, res, next) {
    try {
        let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;

        let [campoOrdenacao, ordem] = ordenacao.split(":"); // o split vai separar a string em um array

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);

        const resultado = req.resultado;

        if (limite > 0 && pagina > 0) {
            const resultadoPaginado = await resultado.find()
                .sort({ [campoOrdenacao]: ordem }) // o mongoose aceita realizar uma ordenação por um determinado campo, onde o valor da ordenação pode ser 1 (crescente) ou -1 (decrescente)
                .skip((pagina - 1) * limite) // este método faz o controlador pular uma determinada quantidade de livros
                .limit(limite)
                // .exec(); // quando se utiliza async/await o exec() se torna opicional

            res.status(200).json(resultadoPaginado);
        } else {
            next(new RequisicaoIncorreta());
        }

    } catch (erro) {
        next(erro);
    }

}

export default paginar;