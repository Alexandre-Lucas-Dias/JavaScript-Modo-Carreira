import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]); // o que vai dentro dos parênteses de useState é o valor inicial do estado

    function fazPesquisa(evento) {
        const textoDigitado = evento.target.value;
        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura" // placeholder serve para fazer com que o campo de digitação tenha um valor predefinido
                onBlur={evento => fazPesquisa(evento)}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <img src={livro.src} alt="livro" />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;