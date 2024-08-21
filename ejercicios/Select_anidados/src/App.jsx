import { Selects } from "./components/Selects";
import { useState } from "react";


const App = () => {
  return (
    <div className="container-app">
      <h1>Aprendizaje de React</h1>
      <p>Selects Anidados</p>
      <hr />
      <Selects />
    </div>
  );
};

export default App;
