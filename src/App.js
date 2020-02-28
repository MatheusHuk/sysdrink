import React, {useState} from 'react';
import * as Style from './style.js';
import './App.css';

function App() {

  const [start, setStart] = useState(false);

  const initiate = () => {
    setStart(true);
  }

  return (
    <>
      <Style.Name start={start}>BandTec</Style.Name>
      <Style.FigureRight start={start}/>
      <Style.FigureLeft start={start}/>
      <Style.Title start={start}>SysDrink&Food</Style.Title>
      <Style.Button onClick={initiate}>Iniciar</Style.Button>
    </>
  );
}

export default App;