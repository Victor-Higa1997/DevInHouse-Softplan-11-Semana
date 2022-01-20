import { useState } from 'react';
import './App.css';
import { Card } from './components/card';
import { Perfil } from './components/perfil';

function App() {
  const data = [{id: 1, nome: 'Victor Higa', descricao: 'Descrição do Victor Higa', seguindo: false}] 
  const [dados, setDados] = useState(data)
  
  return (
    

    <>
      <Perfil/>
      <Card/>
    </>
  );
}

export default App;
