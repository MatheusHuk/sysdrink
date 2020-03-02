import React, {useState} from 'react';
import Routes from './Routes';
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
      <Style.Box start={start}>
        <Routes initiate={initiate} />
      </Style.Box>
    </>
  );
}

export default App;