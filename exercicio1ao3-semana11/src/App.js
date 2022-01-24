import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Card } from './components/card';
import { Formulario } from './components/formulario/Formulario';
import { Perfil } from './components/perfil';
import { GlobalStyles } from './components/thema/GlobalStyles';
import { Theme } from './components/thema/Theme';




function App() {
  const data = [{ id: 1, nome: 'Victor Higa', descricao: 'Descrição do Victor Higa', seguindo: false }]
  const [dados, setDados] = useState(data)

  const [temaDark, setTemaDark] = useState(false)

  const alterarSeg = () => {
    const dadosNovo = dados.map((item) => {
      if (item.id === 1) {
        return {
          ...item,
          seguindo: !item.seguindo,
        };
      }
      return item;
    })
    setDados(dadosNovo)
  }
    const mudarTema = () => {
      console.log(temaDark)
      if(temaDark === false){
        setTemaDark(true)
        return temaDark
      }else{
        setTemaDark(false)
        return temaDark
      }
    }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Perfil mudarTema={mudarTema} status={temaDark}/>
        {
          dados.map((item, index) => <Card key={index} status={temaDark} func={alterarSeg} item={item} />)
        }

      </ThemeProvider>

    </>
  );
}

export default App;
