import React, {useState} from 'react';
import * as Style from './style.js';
import './App.css';

function App() {

  const [start, setStart] = useState(false);

  const initiate = () => {
    setStart(!start);
  }

  return (
    <>
      <Style.Name start={start}>BandTec</Style.Name>
      <Style.FigureRight start={start}/>
      <Style.FigureLeft start={start}/>
      <Style.Title start={start}>SysDrink&Food</Style.Title>
      <Style.Welcome>Bem vindo!</Style.Welcome>
      <Style.Greetings>Como é bom tê-lo conosco!</Style.Greetings>
      <Style.Button start={start} onClick={initiate}>Iniciar</Style.Button>
      <Style.Box start={start}></Style.Box>
    </>
  );
}

export default App;