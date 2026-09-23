import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

// um componente React pode ser considerado uma função que irá retornar um HTML
// 'alt' geralmente é utilizado para acessibilidade, mas o VS reclama se esta tag não estiver presente em uma <img>
// 'ul' significa lista não ordenada (unordened list)

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;