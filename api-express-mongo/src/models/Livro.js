// import autopopulate from "mongoose-autopopulate";
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const min = 10; // número mínimo de páginas
const max = 5000; // número máximo de páginas
const precoMinimo = 0; // preço mínimo para o livro

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O título do livro é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatória"],
      // enum é um termo usado em programação para indicar valores específicos
      enum: {
        values: ["Saraiva Jur", "Atlas"], // esta propriedade são os valores aceitos pela listagem
        message: "A editora {VALUE} não é um valor permitido." // VALUE é substituído pelo valor fornecido pelo usuário
      }
    },
    preco: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor > precoMinimo;
        },
        message: `O preço para o livro deve ser maior que R$${precoMinimo}. Valor fornecido: R$` + "{VALUE}"
      }
    },
    paginas: {
      type: Number,
      // o validate retorna um valor booleano. Tanto o objeto validate quanto a propriedade validator precisam estar exatamente com esta sintaxe para funcionar
      validate: [{
        validator: (valor) => {
          return Number.isInteger(valor);
        },
        message: `O número de páginas deve ser um número inteiro. Valor fornecido: {VALUE}`
      }, {
        validator: (valor) => {
          return valor >= min && valor <= max;
        },
        message: `O número de páginas deve estar entre ${min} e ${max}. Valor fornecido: {VALUE}`
      }]
      // As opções min e max são validações nativas do mongoose. Elas poderiam ser utilizadas no lugar de validate
      // min: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      // max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    },
    autor: autorSchema
  }, { versionKey: false }
);

// livroSchema.plugin(autopopulate);
const livros = mongoose.model('livros', livroSchema);

export default livros;