import styled from "styled-components";

// na prop utilizada, se não for definido algum atributo na tag Titulo em UltimosLancamentosContainer, o atributo assumido será o padrão, que está após o double pipe '||'

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: hsl(0, 0%, 100%);
    font-size: ${props => props.tamanhoFonte || '18px;'};
    color: ${props => props.cor || '#000'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`