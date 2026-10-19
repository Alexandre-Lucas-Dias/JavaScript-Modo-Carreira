const { Router } = require("express");
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro");

const router = Router(); // instância de Router

router.get('/', getLivros);

router.get('/:id', getLivro); // o símbolo ":" indica que o que segue será uma informação variável

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router;