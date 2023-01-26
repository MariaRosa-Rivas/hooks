import React, { useState } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import './App.css';

const App = () => {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <h3>Formulario</h3>
      <Formulario inputs = {state} setInputs={setState}/>
      <Resultado dato={state}/>
    </div>
  );
}

export default App;
